"use client";

import { FormEvent, useState } from "react";
import type { ReservationPayload } from "@/types";
import { validateReservation } from "@/utils/validators";
import { Button } from "@/components/ui/Button";

const initialState: ReservationPayload = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: 2,
  notes: "",
};

export function ReservationForm() {
  const [form, setForm] = useState<ReservationPayload>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const validationError = validateReservation(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Unable to submit reservation.");
      }

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <label className="block text-sm font-medium">
          Date
          <input
            required
            type="date"
            name="date"
            value={form.date}
            onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="block text-sm font-medium">
          Time
          <input
            required
            type="time"
            name="time"
            value={form.time}
            onChange={(e) => setForm((prev) => ({ ...prev, time: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="block text-sm font-medium">
          Guests
          <input
            required
            type="number"
            min={1}
            max={12}
            name="guests"
            value={form.guests}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, guests: Number(e.target.value) }))
            }
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>

      <label className="block text-sm font-medium">
        Notes <span className="font-normal text-muted">(optional)</span>
        <textarea
          name="notes"
          rows={4}
          value={form.notes}
          onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
          className="mt-2 w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </label>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      )}
      {success && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
          Thank you — your reservation request has been received. We will confirm by email shortly.
        </p>
      )}

      <Button type="submit" disabled={loading} className="disabled:opacity-60">
        {loading ? "Sending…" : "Request Reservation"}
      </Button>
    </form>
  );
}
