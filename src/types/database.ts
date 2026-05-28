export type Cafe = {
  id: string;
  name: string;
  slug: string;
  address: string | null;
  phone: string | null;
  created_at: string;
};

export type MenuCategory = {
  id: string;
  cafe_id: string;
  name: string;
  slug: string;
  sort_order: number;
};

export type MenuItem = {
  id: string;
  category_id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  is_featured: boolean;
  is_available: boolean;
};

export type Reservation = {
  id: string;
  cafe_id: string;
  guest_name: string;
  guest_email: string | null;
  guest_phone: string;
  party_size: number;
  reservation_at: string;
  status: "pending" | "confirmed" | "cancelled";
  notes: string | null;
};
