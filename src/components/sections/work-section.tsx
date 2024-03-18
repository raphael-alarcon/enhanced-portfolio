"use client";

import { Card } from "@nextui-org/react";
import Image from "next/image";

type Project = {
    title: string;
    description: string;
    image: string;
    url: string;
};

const projects: Project[] = [
    {
        title: "Bookzy",
        description: "Test",
        image: "/images/work-placeholder.png",
        url: "",
    },
    {
        title: "MADPS",
        description: "Test",
        image: "/images/work-placeholder.png",
        url: "",
    },
    {
        title: "Test",
        description: "Test",
        image: "/images/work-placeholder.png",
        url: "",
    },
];

export const WorkSection = () => {
    return (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {projects.map(({ title, description, image, url }) => (
                <Card key={title}>
                    <Image src={image} width={250} height={250} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Card>
            ))}
        </div>
    )
}