import Image from "next/image"
import { Stepper, Step } from "./about/stepper"

const steps: Step[] = [
    {
        company: "onepoint",
        period: ["2023", "2024"],
        title: "Full Stack Developper",
        description: "MADPS"
    },
    {
        company: "onepoint",
        period: ["2023"],
        title: "Full Stack Developper",
        description: "OPDC"
    },
    {
        company: "Freelance",
        period: ["2022"],
        title: "Java (Forge/Spigot)",
        description: ""
    },
]

export const AboutSection = () => {
    return (
        <div className="flex flex-row min-w-full justify-evenly">
            <Image className="grayscale" src="/images/career.jpeg" width={250} height={250} alt="career"/>
            <div className="career mt-8">
                <Stepper steps={steps} color="bg-[#2E2E2E]"/>
            </div>
        </div>
    )
}