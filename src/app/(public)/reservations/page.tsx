import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { ReservationForm } from "@/features/reservations/ReservationForm";

export const metadata: Metadata = createPageMetadata({
  title: "Reservations",
  description:
    "Reserve a table for brunch, coffee, or an afternoon pastry. We will confirm by email.",
  path: "/reservations",
});

export default function ReservationsPage() {
  return (
    <Section
      eyebrow="Reservations"
      title="Reserve a table"
      description="Tell us when you would like to visit. We will confirm availability by email."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="rounded-3xl border border-border bg-surface p-8">
          <p className="font-display text-2xl font-medium">Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li className="flex items-center justify-between">
              <span>Mon – Fri</span>
              <span className="font-medium text-foreground">7:00 AM – 6:00 PM</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Sat – Sun</span>
              <span className="font-medium text-foreground">8:00 AM – 5:00 PM</span>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            For groups larger than 12, email us at hello@lovebakery.com.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-8">
          <ReservationForm />
        </div>
      </div>
    </Section>
  );
}
