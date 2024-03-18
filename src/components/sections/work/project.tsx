import { Icons } from "@/components/icons";
import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export type Project = {
    title: string;
    icon: keyof typeof Icons;
    description: string;
    image: string;
    url: string;
    color?: string;
};

type ProjectProps = {
    project: Project;
};

export const Project = ( {project}: ProjectProps ) => {

    const color: string = project.color || "white";

    const IconComponent = Icons[project.icon] || Icons["github"];

    return (
        <Card key={project.title}>
            <CardHeader className={`absolute z-10 top-1 flex-col items-start h-full mt-5 ml-5 gap-2 text-[${color}]`}>
                <div className="flex flex-row items-center gap-1 -ml-2">
                    { <IconComponent width={25} fill={project.color} /> }
                    <p className="text-sm font-bold">{ project.title }</p>
                </div>
                <h4 className="text-tiny max-w-32">{ project.description }</h4>
            </CardHeader>
            <Image
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={project.image}
                width={1000}
                height={800}
            />
        </Card>
    )
}