
import { SVGProps } from "react"
const GlowHeroIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={880}
    height={804}
    fill="none"
    {...props}
  >
    <g opacity={0.6}>
      <g filter="url(#a)">
        <circle cx={394.1} cy={355.2} r={242.1} fill="#3D7DE7" />
      </g>
      <g filter="url(#b)">
        <circle cx={504.9} cy={299.8} r={242.1} fill="#A6EEC7" />
      </g>
    </g>
    <defs>
      <filter
        id="a"
        width={754.199}
        height={754.199}
        x={17}
        y={-21.899}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1_326"
          stdDeviation={67.5}
        />
      </filter>
      <filter
        id="b"
        width={1008.2}
        height={1008.2}
        x={0.801}
        y={-204.3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1_326"
          stdDeviation={131}
        />
      </filter>
    </defs>
  </svg>
)
export default GlowHeroIcon
