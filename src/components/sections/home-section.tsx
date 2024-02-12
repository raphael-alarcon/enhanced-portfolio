import Image from "next/image"
import { CallToAction } from "../call-to-action"
import { Presentation } from "../presentation"
import { ScrollLabel } from "../scroll-label"

export const HomeSection = () => {

    return (
        <>
            <div className="flex flex-col items-center gap-10 sm:items-start z-[-10]">
                <Image className="grayscale absolute top-40 right-48 z-[5] bg-white" src="/images/test.jpeg" width={300} height={300} alt="test"/>
                <Presentation/>
                <CallToAction />
            </div>
            <ScrollLabel />
        </>
    )
}