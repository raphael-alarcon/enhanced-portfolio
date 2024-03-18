import { projectsConfig } from "@/config/site";
import { Project } from "./work/project";

export const WorkSection = () => {
    return (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {projectsConfig.map((project) => (
                <Project key={project.title} project={project}  />
            ))}
        </div>
    )
}