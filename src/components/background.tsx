import { backgroundConfig } from "@/config/site";

export function Background() {
    return (
        <svg
            className="z-[-1] absolute top-0 left-0 min-h-full min-w-full"
            style={{ opacity: backgroundConfig.opacity }}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="5"
                    numOctaves="3"
                    stitchTiles="stitch"
                />
            </filter>

            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    );
}
