import Link from "next/link";
import { ChevronRight } from "lucide-react";

type MetaItem =
  | string
  | {
      title: string;
      description?: string;
      display?: "hidden";
    };

interface FolderIndexProps {
  /** Base URL of the current section */
  basePath: string;

  /** Imported _meta.ts object */
  meta: Record<string, MetaItem>;

  /** Skip the overview page (index/page) */
  hideOverview?: boolean;
}

export function FolderIndex({
  basePath,
  meta,
  hideOverview = true,
}: FolderIndexProps) {
  const items = Object.entries(meta).filter(([slug, value]) => {
    if (hideOverview && (slug === "index" || slug === "page")) return false;

    if (typeof value === "object" && value.display === "hidden") return false;

    return true;
  });

  return (
    <div className="grid gap-4 mt-6 sm:grid-cols-2">
      {items.map(([slug, value]) => {
        const title = typeof value === "string" ? value : value.title;
        const description =
          typeof value === "string" ? undefined : value.description;

        return (
          <Link
            key={slug}
            href={`${basePath}/${slug}`}
            className="group rounded-xl border p-5 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{title}</h3>

              <ChevronRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-1" />
            </div>

            {description && (
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                {description}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
}
