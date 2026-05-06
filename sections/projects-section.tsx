"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";
import { premiumEase } from "@/lib/motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected systems across digital healthcare research and product engineering."
            description="Each project is framed as a real product surface: clear constraints, considered interfaces, measurable outcomes, and implementation details that hold up beyond a prototype."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: premiumEase }}
              className="group surface-card relative flex h-full flex-col overflow-hidden rounded-[0.95rem] p-4 transition duration-300 ease-premium hover:-translate-y-1.5"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[0.95rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_42%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[0.7rem] border border-white/[0.55] bg-slate-950/90">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={760}
                  className="aspect-[16/10] w-full object-cover transition duration-500 ease-premium group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="relative flex flex-1 flex-col px-2 pb-2 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200">
                    {project.label}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
