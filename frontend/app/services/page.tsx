import Link from "next/link";

const services = [
  {
    title: "Custom-coded Shopify themes",
    description:
      "Full store builds written from scratch — layout, sections, and functionality tailored to your brand, not a generic template.",
  },
  {
    title: "Premium theme customization",
    description:
      "Already on a paid Shopify theme? I reshape and refine it so it feels unique, polished, and aligned with your brand — not out-of-the-box.",
  },
  {
    title: "Custom sections & Liquid",
    description:
      "Bespoke homepage blocks, product layouts, and interactive details that make your store look more high-end and stand out from competitors.",
  },
  {
    title: "SEO optimization",
    description:
      "Stronger structure, metadata, and on-page setup so your products and collections are easier to find on Google and inside Shopify search.",
  },
  {
    title: "Speed & performance",
    description:
      "Faster load times, leaner assets, and technical cleanup so your store feels snappy — especially on mobile where most shoppers browse.",
  },
  {
    title: "Technical fixes",
    description:
      "Broken layouts, app conflicts, checkout issues, and backend headaches — diagnosed and resolved so your store runs smoothly again.",
  },
  {
    title: "Conversion optimization",
    description:
      "Clearer navigation, better product presentation, and UX improvements focused on turning visitors into buyers — not just a prettier site.",
  },
  {
    title: "Mobile experience",
    description:
      "Responsive polish for phones and tablets, so the shopping flow feels as intentional on mobile as it does on desktop.",
  },
] as const;

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Services
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        What I can do for your store
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        From full custom builds to targeted fixes — I work across design,
        development, and performance on Shopify. Whether you need a new store or
        help with an existing one, here&apos;s how I can support you.
      </p>

      <ul className="mt-14 grid gap-8 sm:grid-cols-2">
        {services.map(({ title, description }) => (
          <li
            key={title}
            className="border border-border p-6 sm:p-8"
          >
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-16 border-t border-border pt-12">
        <p className="max-w-xl text-muted leading-relaxed">
          Not sure which service fits? Most projects combine a few — a redesign
          plus speed work, or custom sections with SEO. Tell me where your store
          is today and what you want to improve.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
