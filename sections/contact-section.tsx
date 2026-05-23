"use client";

import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { profile } from "@/data/portfolio";

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="scroll-mt-32 px-4 pb-16 pt-23 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(59,130,246,0.06),rgba(255,255,255,0.94))] p-8 shadow-panel dark:bg-[linear-gradient(135deg,rgba(59,130,246,0.08),rgba(9,15,28,0.98))] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),_transparent_28%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">
                  Contact
                </p>
                <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                  Building thoughtful systems and looking for a developer?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  <br/>I am open to collaborations and engineering roles.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={profile.email}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/[0.85] px-5 py-3 text-sm font-medium text-foreground transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-sky-500/25 hover:text-sky-600 dark:bg-slate-950/[0.55] dark:hover:text-sky-300"
                  >
                    <Mail className="h-4 w-4" />
                    savastatkov1@gmail.com
                  </a>
                  <a
                    href={profile.cv}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/[0.85] px-5 py-3 text-sm font-medium text-foreground transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-sky-500/25 hover:text-sky-600 dark:bg-slate-950/[0.55] dark:hover:text-sky-300"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-card rounded-[0.85rem] p-5 transition duration-300 ease-premium hover:-translate-y-1"
                >
                  <Linkedin className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-foreground">Professional profile</p>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </div>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-card rounded-[0.85rem] p-5 transition duration-300 ease-premium hover:-translate-y-1"
                >
                  <Github className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold text-foreground">Code and experiments</p>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-border/70 pt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {year} Sava Statkov</p>
        </div>
      </div>
    </section>
  );
}
