"use client";

import { motion } from "motion/react";
import { BriefcaseBusiness } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { experiences } from "@/src/data/experience";


export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#09090b] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            label="Experience"
            title="Where I've worked."
            description="Professional experience building and contributing to real software products."
          />
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute bottom-0 left-4.75 top-0 w-px bg-white/10 md:left-5.75" />

          {experiences.map((experience: any, index: number) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative pb-12 pl-16 last:pb-0 md:pl-20"
            >
              {/* Timeline icon */}
              <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-[#09090b] text-violet-400 md:h-12 md:w-12">
                <BriefcaseBusiness size={19} />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/2 p-6 md:p-8">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-medium">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-violet-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.highlights.map((highlight: string ) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology: string) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-white/40 px-3 py-1.5 text-xs text-zinc-400"
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
    </section>
  );
}