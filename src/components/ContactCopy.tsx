"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

export function ContactCopy() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    let copiedSuccessfully = false;

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(profile.email);
      copiedSuccessfully = true;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = profile.email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      copiedSuccessfully = document.execCommand("copy");
      textarea.remove();
    }

    if (copiedSuccessfully) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 5000);
    } else {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <button type="button" className="copy-button" onClick={copyEmail} aria-live="polite">
      {copied ? <Check size={17} /> : <Copy size={17} />}
      {copied ? "¡Copiado!" : "Copiar email"}
    </button>
  );
}
