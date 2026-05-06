"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { NavItem } from "@/data/portfolio";
import { premiumTransition } from "@/lib/motion";

type MobileNavProps = {
  open: boolean;
  navItems: readonly NavItem[];
  onClose: () => void;
};

export function MobileNav({ open, navItems, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-50 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label="Close menu" className="absolute inset-0 bg-slate-950/28" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={premiumTransition}
            className="absolute inset-x-4 top-20 rounded-[0.875rem] border border-border/80 bg-background/95 p-5 shadow-panel"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Navigate</p>
                <p className="text-lg font-semibold text-foreground">Sections</p>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-500/[0.15] dark:text-sky-200"
              >
                Hire me
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm font-medium text-foreground/75 transition duration-300 ease-premium hover:border-sky-500/20 hover:text-sky-600 dark:hover:text-sky-300"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
