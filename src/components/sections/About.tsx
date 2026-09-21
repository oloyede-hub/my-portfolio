"use client";

import { motion } from "motion/react";
import { Code2, Brain, HeartPulse } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const interests = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building scalable web applications and real-time systems.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Using my medical imaging background to understand real clinical problems.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems for medical imaging and healthcare.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#09090b] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            label="About me"
            title="Engineering meets healthcare."
            description="My background sits at the intersection of software engineering, medical imaging and artificial intelligence."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {interests.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-500/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon size={21} />
                </div>

                <h3 className="text-lg font-medium">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-3xl text-base leading-8 text-zinc-400"
        >
          I&apos;m a full-stack engineer with a background in Medical
          Radiography. I enjoy turning complex problems into practical
          software, particularly in healthcare. My work ranges from modern web
          applications and real-time collaboration systems to AI-assisted
          medical imaging tools.
        </motion.p>
      </div>
    </section>
  );
}