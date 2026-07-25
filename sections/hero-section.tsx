"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

import heroImage from "../image.jpg";
import { SocialLink } from "@/components/ui/social-link";
import { profile } from "@/data/portfolio";
import { premiumEase } from "@/lib/motion";

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: premiumEase } }
};

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-32 px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36">
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={heroItem}
            className="mt-8 text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div variants={heroItem} className="mt-6 space-y-3">
            <p className="text-2xl font-medium tracking-tight text-slate-700 sm:text-3xl dark:text-slate-200">
              Software Engineer & Researcher
            </p>
            <p className="max-w-2xl text-justify text-lg leading-8 text-slate-600 dark:text-slate-300">
              <br />I am an incoming B.Sc. Computer Science student at New Bulgarian University with interests in robotics,
               computer vision, automation, and digital healthcare systems. What interests me most is building software that 
               operates beyond purely digital environments - systems that interact with physical devices. I&apos;ve worked on automation workflows, signal analysis tools, and computer vision applications.
            </p>
          </motion.div>

          <motion.div variants={heroItem} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-3 text-sm font-medium text-sky-700 transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-sky-500/[0.15] dark:text-sky-200"
            >
              Explore projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-5 py-3 text-sm font-medium text-foreground transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-sky-500/30 hover:text-sky-600 dark:bg-slate-950/50 dark:hover:text-sky-300"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-2 shadow-soft">
              <MapPin className="h-4 w-4" />
              Sofia, Bulgaria
            </div>
            <div className="flex items-center gap-3">
              <SocialLink href="https://github.com/Sava-Statkov" icon={Github} label="GitHub" />
              <SocialLink
                href="https://www.linkedin.com/in/sava-statkov-b991b3253/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink href="mailto:savastatkov1@gmail.com" icon={Mail} label="Email" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: premiumEase }}
          className="relative mx-auto w-full max-w-[26.5rem]"
        >
          <Image
            src={heroImage}
            alt={`${profile.name} hero image`}
            priority
            className="w-full rounded-[1rem] object-cover shadow-panel"
          />
        </motion.div>
      </div>
    </section>
  );
}
