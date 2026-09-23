import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-medium text-ink">Hung-Hsun Han</p>
          <p className="text-xs text-ink-muted">Enterprise AI Engineer</p>
        </div>

        <p className="text-xs text-ink-muted">Built with Next.js · Taiwan</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hunghsun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/hunghsun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted transition-colors hover:text-ink"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
