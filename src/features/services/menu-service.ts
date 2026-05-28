import { supabase } from "@/lib/supabase";
import type { MenuItem } from "@/types/database";

export async function getFeaturedMenuItems(): Promise<MenuItem[]> {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("is_featured", true)
    .eq("is_available", true)
    .order("name");

  if (error) {
    throw error;
  }

  return data ?? [];
}
