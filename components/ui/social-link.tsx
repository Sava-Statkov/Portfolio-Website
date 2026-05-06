import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SocialLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
};

export function SocialLink({ href, icon: Icon, label, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/80 text-foreground/75 shadow-soft transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-sky-500/30 hover:text-sky-600 dark:bg-slate-950/[0.72] dark:hover:text-sky-300",
        className
      )}
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
