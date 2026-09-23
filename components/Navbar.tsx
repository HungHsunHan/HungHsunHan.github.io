"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink hover:text-accent-blue transition-colors"
        >
          HH.
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hunghsun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hunghsun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
