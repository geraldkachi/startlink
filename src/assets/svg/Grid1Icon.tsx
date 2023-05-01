import { SVGProps } from "react"
const Grid1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={69}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      stroke="#2568FF"
      d="M3.983 21.984 26 9.273l22.017 12.711v25.423L26 60.118 3.983 47.407V21.984Z"
    />
    <g filter="url(#b)">
      <path
        fill="url(#c)"
        d="m33 12.696 20.785 12v24L33 60.696l-20.785-12v-24l20.785-12Z"
      />
      <path
        stroke="url(#d)"
        d="m33.25 12.263-.25-.145-.25.145-20.785 12-.25.144v24.577l.25.145 20.785 12 .25.144.25-.144 20.785-12 .25-.145V24.407l-.25-.144-20.785-12Z"
      />
    </g>
    <path
      fill="#fff"
      d="M24.212 40.696V.625h7.638v40.07h-7.638ZM16.346 7.35V.625H31.28V7.35H16.346Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.453}
        x2={57.558}
        y1={7.362}
        y2={14.187}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2568FF" />
        <stop offset={1} stopColor="#001137" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={33}
        x2={33}
        y1={12.696}
        y2={60.696}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.63} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={22.385}
        x2={33}
        y1={12.696}
        y2={60.696}
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
        y={6.541}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1_420"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_420"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default Grid1Icon
