import { CallToAction } from "../call-to-action"
import { Presentation } from "../presentation"
import { ScrollLabel } from "../scroll-label"

export const HomeSection = () => {

    return (
        <>
            <div className="flex flex-col items-center gap-10 sm:items-start z-[-10]">
                <Presentation/>
                <CallToAction />
            </div>
            <ScrollLabel />
        </>
    )
}