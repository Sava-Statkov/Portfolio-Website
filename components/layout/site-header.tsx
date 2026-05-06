"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { NavItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  navItems: readonly NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextValue = latest > 20;
    setIsScrolled((current) => (current === nextValue ? current : nextValue));
  });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div
          className={cn(
            "relative flex w-full items-center justify-between px-6 py-3 transition duration-500 ease-premium sm:px-8 lg:px-12",
            isScrolled
              ? "border border-white/60 bg-white/[0.86] shadow-soft backdrop-blur-lg dark:border-slate-800/90 dark:bg-slate-950/[0.82]"
              : "bg-transparent"
          )}
        >
          <a
            href="#home"
            className="inline-flex items-center rounded-full border border-border/60 bg-card/90 px-3 py-2 text-sm font-semibold tracking-[0.18em] text-foreground/[0.85] shadow-soft"
          >
            SS
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-4 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative rounded-full px-5 py-2.5 text-base font-medium text-slate-600 transition duration-300 ease-premium hover:bg-white/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/90 text-foreground/80 shadow-soft transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-sky-500/25 hover:text-sky-500 md:hidden dark:bg-slate-950/[0.72]"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
          <ScrollProgress />
        </div>
      </header>
      <MobileNav open={isMenuOpen} navItems={navItems} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
