"use client";

import { FormEvent, useState } from "react";

type NotifyMeFormProps = {
  productId: string;
};

export default function NotifyMeForm({ productId }: NotifyMeFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, email }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Could not join the waitlist.");

      setState("done");
      setMessage("You’re on the list. We’ll let you know when it’s back.");
      setEmail("");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Could not join the waitlist.");
    }
  }

  return (
    <div className="mt-6 max-w-md">
      <p className="text-sm leading-6 text-[#5f574f]">Want first dibs when it’s back?</p>
      <form onSubmit={submit} className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email"
          aria-label="Email address for back in stock notification"
          className="min-h-12 flex-1 border border-[#243f35]/25 bg-[#fffaf2] px-4 text-[#243f35] outline-none placeholder:text-[#5f574f]/55 focus:border-[#704a35]"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="min-h-12 bg-[#704a35] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {state === "sending" ? "Joining…" : "Notify Me"}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm ${state === "error" ? "text-red-700" : "text-[#704a35]"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
