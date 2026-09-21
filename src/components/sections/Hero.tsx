"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#09090b] px-6 pt-28 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-lg text-zinc-400">
            Hi, I&apos;m Sodiq Oloyede.
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            I build software at the intersection of{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              healthcare & AI.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Full-stack engineer building intelligent healthcare products,
            real-time collaboration systems, and modern web applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View my work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-violet-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/profile.jpg"
                alt="Sodiq Oloyede"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-10 rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur"
          >
            <p className="text-xs text-zinc-500">Currently building</p>
            <p className="mt-1 text-sm font-medium">UltraLink Live ⚡</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}