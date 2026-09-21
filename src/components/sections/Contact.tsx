"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,

  Mail,
} from "lucide-react";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";
import SectionTitle from "../ui/SectionTitle";

const socials = [
  {
    name: "GitHub",
    value: "oloyede-hub",
    href: "https://github.com/oloyede-hub",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    value: "Connect with me",
    href: "#", // Replace with your LinkedIn URL
    icon: SiLinkerd,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#09090b] px-6 py-28 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            label="Get in touch"
            title="Have an idea? Let's talk."
            description="I'm interested in software engineering, healthcare technology and AI opportunities. If you're working on something interesting, I'd love to hear about it."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Main email card */}
          <motion.a
            href="mailto:YOUR_EMAIL@gmail.com"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="group flex min-h-[230px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-violet-500/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Mail size={21} />
              </div>

              <ArrowUpRight
                size={20}
                className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              />
            </div>

            <div>
              <p className="text-sm text-zinc-500">Drop me an email</p>

              <p className="mt-2 text-xl font-medium">
                YOUR_EMAIL@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Socials */}
          <div className="grid gap-5">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-violet-500/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-zinc-300">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="font-medium">{social.name}</p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {social.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-zinc-600 transition group-hover:text-white"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}