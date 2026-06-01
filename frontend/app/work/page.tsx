import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects";

export default function WorkPage() {
  const projects = getProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Work
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Shopify projects
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Selected stores I&apos;ve built, optimized, and designed.
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
