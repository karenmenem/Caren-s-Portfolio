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
};

export function getProjects(): Project[] {
  return projectsData.projects
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order);
}
