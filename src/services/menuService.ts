import type { MenuCategory, MenuItem } from "@/types";

const MENU_ITEMS: MenuItem[] = [
  {
    id: "country-sourdough",
    name: "Country Sourdough",
    description: "48-hour ferment, crackling crust, open crumb.",
    price: 9.5,
    category: "bread",
    featured: true,
  },
  {
    id: "olive-levain",
    name: "Olive Levain",
    description: "Castelvetrano olives folded into our signature levain.",
    price: 11,
    category: "bread",
    featured: true,
  },
  {
    id: "butter-croissant",
    name: "Cultured Butter Croissant",
    description: "Laminated with European butter, honey-glazed finish.",
    price: 5.5,
    category: "pastry",
    featured: true,
  },
  {
    id: "cardamom-bun",
    name: "Cardamom Morning Bun",
    description: "Caramelized edges, orange zest, pearl sugar.",
    price: 6,
    category: "pastry",
  },
  {
    id: "pour-over",
    name: "Single-Origin Pour Over",
    description: "Rotating microlot, brewed to order.",
    price: 5,
    category: "coffee",
  },
  {
    id: "sourdough-avocado",
    name: "Sourdough Avocado Toast",
    description: "Herb oil, pickled shallots, soft egg.",
    price: 14,
    category: "brunch",
    featured: true,
  },
];

export async function getMenuItems(category?: MenuCategory): Promise<MenuItem[]> {
  await Promise.resolve();
  if (!category) return MENU_ITEMS;
  return MENU_ITEMS.filter((item) => item.category === category);
}

export async function getFeaturedMenuItems(): Promise<MenuItem[]> {
  await Promise.resolve();
  return MENU_ITEMS.filter((item) => item.featured);
}
