"use client";

import { motion } from "motion/react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "@/src/lib/LinkedInIcon";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">
        <a
          href="#home"
          className="text-lg tracking-tight"
        >
          <div className="">
            <Image
              src="/images/logo.png"
              alt="Sodiq Oloyede"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/oloyede-hub"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <SiGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/oloyede-hub"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href="#contact"
            className="ml-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
