"use client";

import { motion } from "motion/react";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "@/src/data/projects";
import ProjectCard from "../ui/ProjectCard";


export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-white/5 bg-[#0c0c0f] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            label="Selected work"
            title="Things I've been building."
            description="A selection of projects combining software engineering, healthcare and artificial intelligence."
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}