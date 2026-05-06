"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-32 px-4 pt-23 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="About" title="Building intelligent systems that interact with the real world." />
        </Reveal>

        <div className="mt-14">
          <Reveal className="space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-5xl text-justify text-lg leading-9 text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                RESEARCH INTERESTS
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-soft dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
