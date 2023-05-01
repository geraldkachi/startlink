
import * as React from "react"
import { SVGProps } from "react"
const Grid2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={63}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      stroke="#2568FF"
      d="M3.983 22.984 26 10.273l22.017 12.711v25.423L26 61.118 3.983 48.407V22.984Z"
    />
    <g filter="url(#b)">
      <path
        fill="url(#c)"
        d="m33 13.696 20.785 12v24L33 61.696l-20.785-12v-24l20.785-12Z"
      />
      <path
        stroke="url(#d)"
        d="m33.25 13.263-.25-.145-.25.145-20.785 12-.25.144v24.577l.25.145 20.785 12 .25.144.25-.144 20.785-12 .25-.145V25.407l-.25-.144-20.785-12Z"
      />
    </g>
    <path
      fill="#fff"
      d="m10.73 37.25 15.104-15.79c1.064-1.14 1.92-2.146 2.565-3.02.684-.912 1.178-1.767 1.482-2.565a7.296 7.296 0 0 0 .456-2.508c0-1.672-.55-2.983-1.653-3.933-1.064-.95-2.45-1.425-4.16-1.425-1.749 0-3.307.456-4.675 1.368-1.33.912-2.584 2.356-3.762 4.332l-5.3-4.503c1.595-2.698 3.571-4.731 5.927-6.1 2.394-1.405 5.13-2.108 8.208-2.108 2.622 0 4.902.513 6.84 1.539 1.976 1.026 3.496 2.45 4.56 4.275 1.064 1.824 1.596 3.952 1.596 6.384 0 1.634-.209 3.116-.627 4.446-.38 1.33-1.045 2.66-1.995 3.99-.912 1.292-2.185 2.755-3.819 4.389l-11 11.229h-9.748Zm0 4.446V37.25l6.611-2.28h21.432v6.726H10.73Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.453}
        x2={57.558}
        y1={8.362}
        y2={15.187}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2568FF" />
        <stop offset={1} stopColor="#001137" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={33}
        x2={33}
        y1={13.696}
        y2={61.696}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.63} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={22.385}
        x2={33}
        y1={13.696}
        y2={61.696}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.62} />
      </linearGradient>
      <filter
        id="b"
        width={53.569}
        height={60.309}
        x={6.215}
        y={7.541}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1_428"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_428"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default Grid2Icon
