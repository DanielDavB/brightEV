import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useSearch } from "wouter";
import { COALA_MODELS, CONTACT, QUOTE_WEBHOOK } from "@/data/site";
import "@/styles/bright-quote.css";

const NOT_SURE = "Not sure yet";

type Status = "idle" | "sending" | "sent" | "error";

const field = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

// Model to preselect from /contact?model=<slug>, so "Request pricing" buttons land on the right cart.
function initialModel(search: string) {
  const slug = new URLSearchParams(search).get("model");
  return COALA_MODELS.find((model) => model.slug === slug)?.name ?? "";
}

export default function QuoteForm() {
  const search = useSearch();
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (field(data, "_honey")) return;

    const name = field(data, "name");
    const model = field(data, "model");
    setStatus("sending");
    try {
      // Make's webhook answers 200 "Accepted" once the scenario has queued the request.
      const response = await fetch(QUOTE_WEBHOOK.url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-make-apikey": QUOTE_WEBHOOK.apiKey },
        body: JSON.stringify({
          name,
          phone: field(data, "phone"),
          company: field(data, "company"),
          model,
          subject: `Quote request: ${model} — ${name}`,
          page: window.location.href,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error(`Quote request failed (${response.status}): ${await response.text().catch(() => "")}`);
      setSentTo(name.split(" ")[0]);
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="qf-card qf-done" role="status">
        <CheckCircle2 size={34} strokeWidth={1.4} aria-hidden="true" />
        <h3>Thanks{sentTo ? `, ${sentTo}` : ""}. Your request is in.</h3>
        <p>We will call you with pricing, availability and financing options for your Coala.</p>
        <button className="bx-btn bx-btn-outline" type="button" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="qf-card" onSubmit={submit} aria-describedby="qf-note">
      <div className="qf-grid">
        <div className="qf-field">
          <label htmlFor="qf-name">Name</label>
          <input id="qf-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className="qf-field">
          <label htmlFor="qf-phone">Phone</label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(555) 555-5555"
            pattern="[0-9()+\-.\s]{7,}"
            title="Enter a phone number with at least 7 digits"
            required
          />
        </div>
        <div className="qf-field">
          <label htmlFor="qf-company">
            Company <span>(optional)</span>
          </label>
          <input id="qf-company" name="company" type="text" autoComplete="organization" placeholder="Business or community" />
        </div>
        <div className="qf-field qf-select">
          <label htmlFor="qf-model">Model</label>
          <select id="qf-model" name="model" key={search} defaultValue={initialModel(search)} required>
            <option value="" disabled>
              Select a Coala model
            </option>
            {COALA_MODELS.map((model) => (
              <option key={model.slug} value={model.name}>
                {model.name} · {model.seats} seats
              </option>
            ))}
            <option value={NOT_SURE}>{NOT_SURE}</option>
          </select>
          <ChevronDown size={16} aria-hidden="true" />
        </div>
      </div>
      <input className="qf-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="bx-btn bx-btn-gold qf-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my quote"}
      </button>
      {status === "error" ? (
        <p className="qf-error" role="alert">
          We could not send your request. Please call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> or{" "}
          <a href={CONTACT.emailHref}>email us</a>.
        </p>
      ) : (
        <p className="qf-note" id="qf-note">
          We only use your details to reply to this request.
        </p>
      )}
    </form>
  );
}
