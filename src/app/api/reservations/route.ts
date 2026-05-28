import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const payload = await request.json();
  const partySize = Number(payload.party_size);

  if (
    !payload.guest_name ||
    !payload.guest_phone ||
    !payload.reservation_at ||
    Number.isNaN(partySize) ||
    partySize < 1 ||
    partySize > 20
  ) {
    return NextResponse.json(
      { error: "Please provide a valid name, phone, time, and guest count." },
      { status: 422 },
    );
  }

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase environment variables are not configured." },
      { status: 503 },
    );
  }

  const { data, error } = await supabase
    .from("reservations")
    .insert({
      guest_name: payload.guest_name,
      guest_phone: payload.guest_phone,
      guest_email: payload.guest_email || null,
      party_size: partySize,
      reservation_at: payload.reservation_at,
      notes: payload.notes || null,
      status: "pending",
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ reservation: data }, { status: 201 });
}
