import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type FeaturedProjectCardProps = {
  project: Project;
};

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <Link href={`/work#${project.id}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-neutral-50">
        <Image
          src={project.images.desktop}
          alt={`${project.name} storefront preview`}
          fill
          className="object-contain object-top transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <p className="mt-4 text-sm font-semibold text-foreground group-hover:text-accent group-hover:underline group-hover:underline-offset-4">
        {project.name}
      </p>
      {project.tags[0] && (
        <p className="mt-1 text-xs text-muted">{project.tags[0]}</p>
      )}
    </Link>
  );
}
