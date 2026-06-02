import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

const labelClass =
  "text-xs font-medium uppercase tracking-widest text-muted";

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasMobile = Boolean(project.images.mobile);
  const websiteLabel = project.website?.replace(/^https?:\/\//, "");

  return (
    <article id={project.id} className="border-b border-border py-12 last:border-b-0 sm:py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {project.name}
      </h2>
      {project.website ? (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
        >
          {websiteLabel}
        </a>
      ) : (
        <p className="mt-1 text-sm text-muted">No live website</p>
      )}
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        {project.description}
      </p>
      {project.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border px-3 py-1 text-xs text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {hasMobile && project.images.mobile ? (
        <div className="mt-10 flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_200px] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-8 lg:gap-y-4">
          <p className={`${labelClass} lg:col-start-1 lg:row-start-1`}>
            Desktop
          </p>
          <div className="relative aspect-[16/10] w-full overflow-hidden lg:col-start-1 lg:row-start-2">
            <Image
              src={project.images.desktop}
              alt={`${project.name} desktop view`}
              fill
              className="object-contain object-top"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>
          <p className={`${labelClass} lg:col-start-2 lg:row-start-1`}>
            Mobile
          </p>
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[200px] overflow-hidden lg:col-start-2 lg:row-start-2 lg:mx-0 lg:max-w-none">
            <Image
              src={project.images.mobile}
              alt={`${project.name} mobile view`}
              fill
              className="object-contain object-top"
              sizes="200px"
            />
          </div>
        </div>
      ) : (
        <div className="mt-10 max-w-3xl">
          <p className={labelClass}>Desktop</p>
          <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden">
            <Image
              src={project.images.desktop}
              alt={`${project.name} desktop view`}
              fill
              className="object-contain object-top"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>
        </div>
      )}
    </article>
  );
}
