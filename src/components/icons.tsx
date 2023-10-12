import { AlertTriangle, LucideProps, LucideIcon, Settings } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
    warning: AlertTriangle,
    settings: Settings,
    logo: ({ ...props }: LucideProps) => (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width={props.size + "px"}
            height={props.size + "px"}
            viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet">
            <g
                transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none">
                <path
                    d="M1360 2645 c-36 -8 -107 -35 -157 -60 -157 -77 -268 -206 -330 -380
   l-28 -80 -3 -888 -3 -887 101 0 100 0 2 579 3 579 470 -559 c259 -308 477
   -569 486 -580 15 -20 17 -19 90 41 41 34 75 63 77 65 2 2 -159 196 -357 431
   l-359 429 87 7 c344 27 599 285 618 623 7 119 -14 215 -72 332 -107 216 -316
   350 -560 359 -64 2 -123 -1 -165 -11z m253 -200 c85 -22 134 -51 204 -118 248
   -238 156 -650 -169 -764 -73 -25 -223 -25 -296 0 -175 61 -296 221 -309 407
   -10 136 31 244 129 346 117 123 282 171 441 129z"
                />
            </g>
        </svg>
    ),
};
