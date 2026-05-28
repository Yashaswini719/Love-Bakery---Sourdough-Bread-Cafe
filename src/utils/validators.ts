import type { ReservationPayload } from "@/types";

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateReservation(
  payload: Partial<ReservationPayload>,
): string | null {
  if (!payload.name?.trim()) return "Name is required.";
  if (!payload.email?.trim() || !isValidEmail(payload.email)) {
    return "A valid email is required.";
  }
  if (!payload.date) return "Date is required.";
  if (!payload.time) return "Time is required.";
  if (!payload.guests || payload.guests < 1 || payload.guests > 12) {
    return "Guests must be between 1 and 12.";
  }
  return null;
}
