"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const fallbackSection = sectionIds[0] ?? "home";
  const [activeSection, setActiveSection] = useState(fallbackSection);
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const visibleSections = new Map<string, number>();

    const resolveClosestSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      let nextSection = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          nextSection = section;
        }
      }

      setActiveSection((current) => (current === nextSection.id ? current : nextSection.id));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }

        if (visibleSections.size > 0) {
          const [nextSection] = Array.from(visibleSections.entries()).sort((a, b) => b[1] - a[1]);

          if (nextSection) {
            setActiveSection((current) => (current === nextSection[0] ? current : nextSection[0]));
            return;
          }
        }

        resolveClosestSection();
      },
      {
        rootMargin: "-24% 0px -55% 0px",
        threshold: [0.15, 0.32, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section));
    resolveClosestSection();

    return () => observer.disconnect();
  }, [idsKey, fallbackSection, sectionIds]);

  return activeSection;
}
