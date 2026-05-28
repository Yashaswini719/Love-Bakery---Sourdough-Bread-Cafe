import type { MenuItem } from "@/types";
import { formatPrice } from "@/utils/format";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-medium text-foreground">{item.name}</h3>
          <span className="shrink-0 text-sm font-semibold text-accent">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted/80">
        {item.category}
      </p>
    </article>
  );
}
