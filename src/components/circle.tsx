import React from "react";

type CircleProps = React.SVGProps<SVGSVGElement> & {
    width: number;
    height: number;
    x: number;
    y: number;
    color: string;
};

export function Circle({ ...props }: CircleProps) {
    return (
        <svg
            className={`absolute z-[-1]`}
            style={{
                top: `${props.y}%`,
                left: `${props.x}%`,
                fill: props.color,
            }}
            width={props.width}
            height={props.height}
            xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_7)">
                <ellipse
                    cx={props.width / 2}
                    cy={props.height / 2}
                    rx={props.width / 3}
                    ry={props.height / 3}
                    fill={props.color}
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_2_7"
                    x="1.52588e-05"
                    y="0"
                    width={props.width}
                    height={props.height}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feMorphology
                        radius="1"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect1_dropShadow_2_7"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation={props.height / 10} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_7"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_7"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
