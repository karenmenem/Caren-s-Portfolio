"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6 text-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      {open ? (
        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="min-w-0 shrink text-base font-semibold tracking-tight text-foreground sm:text-lg"
        >
          Karen Menhem
        </Link>

        {/* Desktop navigation — only on large screens */}
        <nav
          className="hidden shrink-0 items-center gap-6 lg:flex lg:gap-8"
          aria-label="Main"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === href ? "font-medium text-foreground" : "text-muted"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button — phones & tablets */}
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border bg-background lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[65px] z-40 bg-foreground/25 lg:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background px-4 py-2 shadow-md lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block border-b border-border px-2 py-4 text-base last:border-0 transition-colors hover:text-accent ${
                      pathname === href
                        ? "font-semibold text-foreground"
                        : "text-muted"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
