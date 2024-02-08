import { backgroundConfig } from "@/config/site";

export function Background() {
    return (
        <>
        <svg
            className="z-[-1] top-0 left-0 min-h-full min-w-full fixed"
            style={{ opacity: backgroundConfig.opacity }}
            xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="7"
                    numOctaves="5"
                    stitchTiles="stitch"
                />
            </filter>

            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        </>
    );
}
