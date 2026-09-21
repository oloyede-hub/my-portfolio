import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <p className="font-medium">
            Sodiq Oloyede
            <span className="text-violet-400">.</span>
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            Software • Healthcare • AI
          </p>
        </div>

        <p className="text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Sodiq Oloyede. Built with Next.js.
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/oloyede-hub"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <SiGithub size={17} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            <SiLinkerd size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}