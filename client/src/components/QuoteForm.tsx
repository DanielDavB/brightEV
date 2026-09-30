import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useSearch } from "wouter";
import { COALA_MODELS, CONTACT, QUOTE_FORM_ENDPOINT } from "@/data/site";
import "@/styles/bright-quote.css";

const NOT_SURE = "Not sure yet";

type Status = "idle" | "sending" | "sent" | "error" | "activation";

interface QuoteRequest {
  name: string;
  phone: string;
  company: string;
  model: string;
}

const field = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

function mailtoHref({ name, phone, company, model }: QuoteRequest) {
  const body = [`Name: ${name}`, `Phone: ${phone}`, `Company: ${company || "—"}`, `Model: ${model}`].join("\n");
  return `${CONTACT.emailHref}?subject=${encodeURIComponent(`Quote request: ${model}`)}&body=${encodeURIComponent(body)}`;
}

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

    const request: QuoteRequest = {
      name: field(data, "name"),
      phone: field(data, "phone"),
      company: field(data, "company"),
      model: field(data, "model"),
    };

    if (!QUOTE_FORM_ENDPOINT) {
      window.location.href = mailtoHref(request);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(QUOTE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: request.name,
          Phone: request.phone,
          Company: request.company || "—",
          Model: request.model,
          _subject: `Quote request: ${request.model} — ${request.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      // Until the owner clicks the link in FormSubmit's one-time activation email, every
      // submission is answered with an "activate this form" message instead of being delivered.
      if (/activat/i.test(result.message ?? "")) {
        setStatus("activation");
        return;
      }
      if (!response.ok || String(result.success) === "false") throw new Error(`Quote request failed (${response.status})`);
      setSentTo(request.name.split(" ")[0]);
      setStatus("sent");
      form.reset();
    } catch {
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
      {status === "activation" ? (
        <p className="qf-error" role="alert">
          This form is waiting for activation. The owner must click the &quot;Activate Form&quot; link FormSubmit just
          emailed to the inbox that receives quotes (check spam too). Meanwhile, call{" "}
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
        </p>
      ) : status === "error" ? (
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
