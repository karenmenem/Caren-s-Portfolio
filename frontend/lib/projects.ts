import projectsData from "@/content/projects.json";

export type Project = {
  id: string;
  name: string;
  website: string | null;
  description: string;
  images: {
    desktop: string;
    mobile: string | null;
  };
  order: number;
  published: boolean;
  featured?: boolean;
  tags: string[];
};

export function getProjects(): Project[] {
  return projectsData.projects
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}
