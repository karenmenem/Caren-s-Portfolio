const contactItems = [
  {
    label: "Email",
    value: "karenmenhem2@gmail.com",
    href: "mailto:karenmenhem2@gmail.com",
  },
  {
    label: "Lebanon",
    value: "+961 76 687 550",
    href: "tel:+96176687550",
  },
  {
    label: "Brazil",
    value: "+55 45 99142 9959",
    href: "tel:+5545991429959",
  },
  {
    label: "LinkedIn",
    value: "karen-menhem",
    href: "https://www.linkedin.com/in/karen-menhem-329a72361/",
    external: true,
  },
  {
    label: "GitHub",
    value: "karenmenem",
    href: "https://github.com/karenmenem",
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Contact
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Get in touch
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Reach out by email or phone. I&apos;m happy to discuss Shopify projects
        and collaborations.
      </p>
      <ul className="mt-12 divide-y divide-border border-y border-border">
        {contactItems.map(({ label, value, href, ...rest }) => (
          <li key={label} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              {label}
            </span>
            <a
              href={href}
              {...("external" in rest && rest.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-lg text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
