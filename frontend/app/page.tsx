import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Shopify Developer
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        I build and refine Shopify stores that look great on every screen.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Welcome to my portfolio. Explore selected Shopify projects, learn more
        about my work, or get in touch.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/work"
          className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View my work
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
