import Link from "next/link";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:karenmenhem2@gmail.com",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karen-menhem-329a72361/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/karenmenem",
    external: true,
  },
  {
    label: "Get in touch",
    href: "/contact",
    external: false,
  },
] as const;

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-semibold text-foreground">Karen Menhem</p>
          <p className="mt-1 text-sm text-muted">Shopify developer</p>
        </div>
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          {footerLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}
