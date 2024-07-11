import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#000"
      d="M61.5 33.938A3.063 3.063 0 0 1 64.563 37v1.531a3.063 3.063 0 0 1-3.063 3.063h-49a3.063 3.063 0 0 1-3.063-3.063V37a3.062 3.062 0 0 1 3.063-3.063h49Zm0-16.844a3.063 3.063 0 0 1 3.063 3.062v1.532A3.063 3.063 0 0 1 61.5 24.75h-49a3.063 3.063 0 0 1-3.063-3.063v-1.53a3.063 3.063 0 0 1 3.063-3.063h49Zm-49 41.343a3.063 3.063 0 0 1-3.063-3.062v-1.531A3.063 3.063 0 0 1 12.5 50.78h27.563a3.063 3.063 0 0 1 3.062 3.063v1.531a3.063 3.063 0 0 1-3.063 3.063H12.5Z"
    />
  </Svg>
)
export default SvgComponent
