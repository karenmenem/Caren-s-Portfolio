import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function WorkPage() {
  const projects = getProjects();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Work
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Shopify projects
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Selected stores I&apos;ve built, optimized, and designed. I&apos;ve
        worked on{" "}
        <span className="text-foreground">30–40 Shopify stores</span> in total
        — the ones below are standout builds and redesigns. Many others were
        technical fixes, speed work, and ongoing optimization, so they&apos;re
        not featured here.
      </p>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        Some live sites may look a little different now — store owners often keep
        updating after launch with new products, collections, photos, and
        seasonal changes. Screenshots here show the work at the time of each
        project.
      </p>

      {projects.length === 0 ? (
        <p className="mt-16 text-muted">Projects coming soon.</p>
      ) : (
        <div className="mt-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
