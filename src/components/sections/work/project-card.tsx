import { Icons } from "@/components/icons";
import { Project } from "@/types";
import { Button, Card, CardHeader, Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
    project: Project;
};

export const ProjectCard = ({project}: ProjectProps ) => {

    const color: string = project.color || "white";

    const IconComponent = Icons[project.icon] || Icons["github"];
    
    return (
        <Card key={project.title}>
            <CardHeader className={`absolute flex-col items-start justify-center h-full ml-5 gap-2`}>
                <div className="flex flex-row items-center gap-1 -ml-2">
                    { <IconComponent width={25} fill={project.color} /> }
                    <p className="text-sm font-bold">{ project.title }</p>
                </div>
                <h4 className="text-tiny max-w-32">{ project.description }</h4>
                { project.github && (
                    <>
                        <Spacer y={2} />
                        <Button size="sm" radius="lg" style={{ background: project.color }} as={Link} href={project.github} className="text-white" target="_blank">
                            <Icons.github width={15}/>
                            <p className="text-xs">Voir plus</p>
                        </Button>
                    </>
                )}
            </CardHeader>
            <Image
                alt="Project card background image, this is a simple mockup of a project"
                src={project.image}
                width={1000}
                height={800}
            />
        </Card>
    )
}