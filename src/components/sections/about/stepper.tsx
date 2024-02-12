import { cn } from "@/lib/utils";

export type Step = {
    company: string;
    period: [Year, Year?];
    title: string;
    description: string;
}

type Year = string;

type StepperProps = {
    steps: Step[]
    color: string;
}

export const Stepper = ({steps, color}: StepperProps) => {

    const height: number = 28;

    return (
        <div>
            {steps.map((step, index) => (
                <div className={"flex flex-row items-start h-"+height + " gap-6"} key={index}>
                    <div className="flex flex-col items-center pt-6">
                        <div className={cn("rounded-full w-5 h-5 relative", color)}>
                            {steps[0] == step && <div className={cn("rounded-full absolute top-0 left-0 animate-ping w-full h-full", color)}/>}
                        </div>
                        <div className={cn("h-28 w-1", steps[steps.length-1] != step ? color : "bg-none")}/>
                    </div>
                    <div className="flex flex-col items-start text-sm h-24">
                        <h3 className="text-gray-500">
                            <span className="font-semibold">{step.company} </span> 
                            / {step.period.join(' - ')}
                        </h3>
                        <h2 className="font-extrabold text-large">{step.title}</h2>
                        <p>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}