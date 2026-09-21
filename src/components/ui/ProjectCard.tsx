"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,

  Sparkles,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  live,
  featured,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={
          featured
            ? "grid md:grid-cols-[1.2fr_0.8fr]"
            : ""
        }
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-zinc-900 ${
            featured
              ? "min-h-[300px] md:min-h-[430px]"
              : "aspect-[16/10]"
          }`}
        >
          <Image
            src={image}
            alt={`${title} project`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {featured && (
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md">
              <Sparkles size={13} className="text-violet-400" />
              Featured project
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 md:p-8">
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-7">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Live demo
                <ArrowUpRight size={16} />
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                <SiGithub size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}