import type { MenuItem } from "@/types";
import { MenuCard } from "./MenuCard";

type MenuGridProps = {
  items: MenuItem[];
};

export function MenuGrid({ items }: MenuGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id}>
          <MenuCard item={item} />
        </li>
      ))}
    </ul>
  );
}
