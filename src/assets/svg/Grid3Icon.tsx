import { SVGProps } from "react"
const Grid3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={62}
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
      d="M23.524 41.266c-2.698 0-5.168-.475-7.41-1.425-2.242-.988-4.123-2.394-5.643-4.218l5.13-5.073c.76 1.14 1.843 2.052 3.249 2.736 1.406.684 2.926 1.026 4.56 1.026 1.52 0 2.83-.266 3.933-.798 1.102-.57 1.957-1.35 2.565-2.337.646-1.026.969-2.204.969-3.534 0-1.406-.323-2.603-.97-3.591-.607-.988-1.5-1.748-2.678-2.28-1.178-.532-2.584-.798-4.218-.798-.722 0-1.463.057-2.223.17-.76.077-1.406.21-1.938.4l3.42-4.332a27.72 27.72 0 0 1 2.793-.741c.95-.228 1.824-.342 2.622-.342 2.052 0 3.895.494 5.529 1.482 1.672.95 2.983 2.318 3.933 4.104.988 1.748 1.482 3.819 1.482 6.213 0 2.66-.627 4.997-1.881 7.01-1.254 1.977-3.021 3.535-5.301 4.675-2.242 1.102-4.883 1.653-7.923 1.653ZM18.85 21.544v-4.446L29.11 5.185l8.892-.114L27.4 17.21l-8.55 4.333ZM12.694 7.35V.625h25.308V5.07l-6.327 2.28H12.694Z"
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
          result="effect1_backgroundBlur_1_436"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_436"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default Grid3Icon
