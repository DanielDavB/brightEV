import { useEffect } from "react";
import { useLocation } from "wouter";

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  return Boolean(target);
}

// wouter navigates with pushState, which neither resets scroll nor jumps to a
// #hash. Reset to the top on every route change and honour hashes, including
// same-page links whose pathname does not change (wouter emits "pushState").
export default function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    if (!scrollToHash()) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  useEffect(() => {
    const onPush = () => requestAnimationFrame(scrollToHash);
    window.addEventListener("pushState", onPush);
    return () => window.removeEventListener("pushState", onPush);
  }, []);

  return null;
}
