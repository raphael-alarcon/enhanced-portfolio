import { projectsConfig } from "@/config/site";
import { ProjectCard } from "./work/project-card";

export const WorkSection = () => {
    return (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {projectsConfig.map((project) => (
                <ProjectCard key={project.title} project={project}  />
            ))}
        </div>
    )
}