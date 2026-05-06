"use client";

import { motion } from "framer-motion";
import { Dumbbell, Lightbulb, Music4 } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { hobbies } from "@/data/portfolio";
import { premiumEase } from "@/lib/motion";

const hobbyIcons = {
  music: Music4,
  sports: Dumbbell,
  interests: Lightbulb
} as const;

export function HobbiesSection() {
  return (
    <section id="hobbies" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Hobbies"
            title="Creative pursuits and recreational activities beyond academia"
            className="max-w-4xl"
            titleClassName="lg:whitespace-nowrap"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hobbies.map((hobby, index) => {
            const Icon = hobbyIcons[hobby.icon];

            return (
              <motion.article
                key={hobby.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.72, delay: index * 0.08, ease: premiumEase }}
                className="surface-card rounded-[0.95rem] p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">{hobby.title}</h3>
                <p className="mt-4 text-justify text-base leading-8 text-slate-600 dark:text-slate-300">{hobby.description}</p>

                {hobby.audioSrc ? (
                  <div className="mt-7 space-y-3">
                    {hobby.composer && hobby.pieceName && (
                      <div className="text-sm leading-relaxed text-muted-foreground">
                        <p className="font-medium text-foreground">{hobby.pieceName}</p>
                        <p className="text-xs">{hobby.composer}</p>
                      </div>
                    )}
                    <audio
                      controls
                      className="w-full max-w-sm rounded-lg"
                      preload="none"
                    >
                      <source src={hobby.audioSrc} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
