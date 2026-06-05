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
        A selection of stores I&apos;ve built or redesigned for my own clients
        and brands — work I can show and stand behind. I&apos;ve delivered on{" "}
        <span className="text-foreground">30–40 Shopify stores</span> in
        total; featured here are the strongest full builds and redesigns, plus
        many smaller projects around speed, SEO, and technical fixes that
        aren&apos;t listed.
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        Work done through agencies isn&apos;t included — those sites belong to
        the agency&apos;s portfolio. Screenshots are from the time of each
        project; live stores may look different as owners update products and
        content.
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
