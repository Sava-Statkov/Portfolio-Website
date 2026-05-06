"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpenText } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { publications } from "@/data/portfolio";
import { premiumEase } from "@/lib/motion";

export function PublicationsSection() {
  return (
    <section id="publications" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Publications"
            title="Publications & Technical Contributions"
            description="A collection of conference submissions, technical reports, and competition research focused on robotics, computer vision, automation, and applied software systems."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: premiumEase }}
              className="surface-card overflow-hidden rounded-[1rem]"
            >
              <div className="grid gap-0 lg:grid-cols-[320px_minmax(0,1fr)]">
                <div className="relative h-full border-b border-border/70 lg:border-b-0 lg:border-r">
                  <Image
                    src={publication.image}
                    alt={publication.title}
                    width={960}
                    height={720}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200">
                      {publication.status}
                    </span>
                    <span className="rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
                      {publication.venue}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                    {publication.title}
                  </h3>
                  <p className="mt-3 text-base font-medium text-slate-500 dark:text-slate-400">
                    {publication.authors}
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                    {publication.abstract}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {index !== 1 && (
                      <a
                        href={publication.paper}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-4 py-2.5 text-sm font-medium text-foreground transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-sky-500/25 hover:text-sky-600 dark:bg-slate-950/[0.55] dark:hover:text-sky-300"
                      >
                        <BookOpenText className="h-4 w-4" />
                        Read paper
                      </a>
                    )}
                    <a
                      href={publication.paper}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-1 py-2 text-sm font-medium text-slate-500 transition duration-300 ease-premium hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300"
                    >
                      External link
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
