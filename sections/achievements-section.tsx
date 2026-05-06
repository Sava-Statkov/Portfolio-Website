"use client";

import { motion } from "framer-motion";
import { Github, GraduationCap, ShieldCheck, Trophy } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/data/portfolio";
import { premiumEase } from "@/lib/motion";

const icons = {
  trophy: Trophy,
  graduation: GraduationCap,
  shield: ShieldCheck,
  github: Github
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Experiences and milestones across academics and independent work."
            description="Competitions, academic performance, technical certifications and projects these milestones reflect how i continue improving my skillset"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: premiumEase }}
                className="surface-card rounded-[0.95rem] p-6 transition duration-300 ease-premium hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>

                <AnimatedCounter
                  value={item.value}
                  decimals={item.decimals}
                  suffix={item.suffix}
                  className="mt-8 block text-4xl font-semibold tracking-tight text-foreground"
                />
                <h3 className="mt-3 text-lg font-semibold text-foreground">{item.label}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
