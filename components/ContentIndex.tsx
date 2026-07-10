"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Clock3 } from "lucide-react";

type MetaItem =
  | string
  | {
      title: string;
      description?: string;
      badge?: string;
      duration?: string;
      display?: "hidden";
    };

interface ContentIndexProps {
  /** Imported _meta.ts object */
  meta: Record<string, MetaItem>;

  /** cards = subjects/folders, list = topic contents */
  variant?: "cards" | "list";

  /** Section title (used only for list variant) */
  title?: string;

  /** Hide page.mdx/index.mdx entry */
  hideOverview?: boolean;
}

export function ContentIndex({
  meta,
  variant = "cards",
  title = "Contents",
  hideOverview = true,
}: ContentIndexProps) {
  const pathname = usePathname();
  const basePath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  const items = Object.entries(meta).filter(([slug, value]) => {
    if (hideOverview && (slug === "page" || slug === "index")) return false;
    if (typeof value === "object") {
      if (value.display === "hidden") return false;
      if ("type" in value && value.type !== "page") return false;
      if (!value.title) return false;
    }
    return true;
  });

  if (variant === "cards") {
    return (
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map(([slug, value]) => {
          const item = typeof value === "string" ? { title: value } : value;

          return (
            <Link
              key={slug}
              href={`${basePath}/${slug}`}
              className="group rounded-xl border p-5 transition-all hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.title}</h3>

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 text-neutral-500"
                />
              </div>

              {item.description && (
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {item.description}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>

      <div className="overflow-hidden rounded-xl border">
        {items.map(([slug, value], index) => {
          const item = typeof value === "string" ? { title: value } : value;

          return (
            <Link
              key={slug}
              href={`${basePath}/${slug}`}
              className={[
                "group flex items-center justify-between p-5 transition-all",
                index !== items.length - 1 && "border-b",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>

                  {item.badge && (
                    <span className="rounded-full border px-2 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="ml-6 flex shrink-0 items-center gap-4 text-sm text-neutral-500">
                {item.duration && (
                  <span className="flex items-center gap-1">
                    <Clock3 size={14} />
                    {item.duration}
                  </span>
                )}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
