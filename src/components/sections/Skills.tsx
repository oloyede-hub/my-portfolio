"use client";

import { motion } from "motion/react";
import SectionTitle from "../ui/SectionTitle";
import { skillGroups } from "@/src/data/skills";


export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-[#0c0c0f] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            label="Skills"
            title="Technologies I work with."
            description="The tools I use to take products from an idea to a working application."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="mb-5 font-medium text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-400 transition hover:border-violet-500/30 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}