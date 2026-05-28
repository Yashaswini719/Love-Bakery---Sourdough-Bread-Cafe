"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Check, Loader2, Users } from "lucide-react";
import { type FormEvent, useState } from "react";
import { easing } from "@/components/animations/motion-presets";
import { cn } from "@/utils/cn";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "min-h-12 w-full rounded-2xl border border-cream/12 bg-cream/[0.06] px-4 text-sm text-cream outline-none transition placeholder:text-cream/35 focus:border-gold focus:bg-cream/[0.09]";

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      guest_name: String(form.get("guest_name") ?? ""),
      guest_phone: String(form.get("guest_phone") ?? ""),
      guest_email: String(form.get("guest_email") ?? ""),
      party_size: Number(form.get("party_size") ?? 2),
      reservation_at: String(form.get("reservation_at") ?? ""),
      notes: String(form.get("notes") ?? ""),
      status: "pending",
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Reservation could not be sent.");
      }

      setStatus("success");
      setMessage("Request received. We will confirm your table shortly.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your reservation.",
      );
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: easing }}
      className="rounded-[1.5rem] border border-cream/12 bg-cream/[0.05] p-5 backdrop-blur-xl sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Name
          </span>
          <input
            required
            name="guest_name"
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Phone
          </span>
          <input
            required
            name="guest_phone"
            className={fieldClass}
            placeholder="+91..."
            autoComplete="tel"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Email
          </span>
          <input
            name="guest_email"
            type="email"
            className={fieldClass}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Guests
          </span>
          <span className="relative block">
            <Users
              aria-hidden
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/45"
            />
            <input
              required
              name="party_size"
              type="number"
              min="1"
              max="20"
              defaultValue="2"
              className={cn(fieldClass, "pl-11")}
            />
          </span>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Date and time
          </span>
          <span className="relative block">
            <CalendarDays
              aria-hidden
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/45"
            />
            <input
              required
              name="reservation_at"
              type="datetime-local"
              className={cn(fieldClass, "pl-11")}
            />
          </span>
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Notes
          </span>
          <textarea
            name="notes"
            className={cn(fieldClass, "min-h-28 resize-none py-4")}
            placeholder="Window seat, birthday, allergies..."
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gold px-6 text-sm font-bold uppercase tracking-[0.18em] text-charcoal transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-65"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : status === "success" ? (
            <Check size={16} />
          ) : null}
          Request table
        </button>

        <AnimatePresence mode="wait">
          {message ? (
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={cn(
                "text-sm leading-6",
                status === "success" ? "text-gold" : "text-rose",
              )}
              role="status"
            >
              {message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
