import Link from "next/link";
import { ArrowRight, Clock3, Star } from "lucide-react";

export interface TopicItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  duration?: string;
}

interface TopicIndexProps {
  title?: string;
  items: TopicItem[];
}

export function TopicIndex({ title, items }: TopicIndexProps) {
  return (
    <section className="mt-8">
      {title && (
        <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>
      )}

      <div className="divide-y rounded-xl border">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between p-5 transition-colors"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{item.title}</h3>

                {item.badge && (
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
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

            <div className="ml-6 flex items-center gap-4 text-sm text-neutral-500">
              {item.duration && (
                <span className="flex items-center gap-1">
                  <Clock3 size={14} />
                  {item.duration}
                </span>
              )}

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
