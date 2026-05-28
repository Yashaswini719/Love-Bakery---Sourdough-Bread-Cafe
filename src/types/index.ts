export type MenuCategory = "bread" | "pastry" | "coffee" | "brunch";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  featured?: boolean;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type ReservationPayload = {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
