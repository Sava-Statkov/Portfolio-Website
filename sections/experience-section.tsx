"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/portfolio";
import { premiumEase } from "@/lib/motion";

type ExperienceLogoProps = {
  src: string;
  alt: string;
  fallback: string;
};

function ExperienceLogo({ src, alt, fallback }: ExperienceLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">{fallback}</span>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={68}
      height={68}
      sizes="68px"
      className="h-[3.63rem] w-[3.63rem] shrink-0 object-contain sm:h-[4.24rem] sm:w-[4.24rem]"
      onError={() => setHasError(true)}
    />
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Applied engineering across software, robotics, and intelligent systems."
          />
        </Reveal>

        <div className="relative mt-14">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: premiumEase }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-sky-400 via-sky-500/60 to-transparent md:left-7"
          />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.72, delay: index * 0.08, ease: premiumEase }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-[9px] top-8 h-3.5 w-3.5 rounded-full border border-sky-300 bg-sky-500 shadow-[0_0_0_8px_rgba(59,130,246,0.12)] md:left-[22px]" />
                <div className="surface-card rounded-[0.95rem] p-6 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-4">
                        <ExperienceLogo src={item.logo} alt={`${item.company} logo`} fallback={item.logoFallback} />
                        <div className="min-w-0">
                          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                            {item.company}
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{item.role}</h3>
                        </div>
                      </div>
                      <p className="mt-8 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                        {item.summary}
                      </p>
                    </div>
                    <span className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                      {item.duration}
                    </span>
                  </div>

                  <div className="mt-7 space-y-3">
                    {item.achievements.map((achievement) => (
                      <div key={achievement} className="flex gap-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
