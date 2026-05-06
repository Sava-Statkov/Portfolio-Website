"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return <div className={cn("h-10 w-10 rounded-full border border-border/70 bg-card/70", className)} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/90 text-foreground/80 shadow-soft transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-sky-500/25 hover:text-sky-500 dark:bg-slate-950/[0.72]",
        className
      )}
    >
      <SunMedium
        className={cn(
          "absolute h-4 w-4 transition duration-300 ease-premium",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition duration-300 ease-premium",
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      />
    </button>
  );
}
