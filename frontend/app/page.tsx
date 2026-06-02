import Link from "next/link";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import Testimonials from "@/components/Testimonials";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Shopify Developer
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        Shopify developer — custom stores, speed, and conversion.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Welcome to my portfolio. Explore selected Shopify projects, learn more
        about my work, or get in touch.
      </p>

      <p className="mt-8 inline-block border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-foreground">
        30–40 stores · Custom builds &amp; optimization
      </p>

      {featured.length > 0 && (
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
              Selected work
            </h2>
            <Link
              href="/work"
              className="text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
            >
              View all
            </Link>
          </div>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <li key={project.id}>
                <FeaturedProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <Testimonials />

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/work"
          className="inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View my work
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
