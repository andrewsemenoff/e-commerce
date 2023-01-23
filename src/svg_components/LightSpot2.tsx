import * as React from "react";
import { SVGProps } from "react";
const SvgLightSpot2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 494 347"
  fill="#6C72CB"
  {...props}>
    <filter id="blur">
      <feGaussianBlur stdDeviation="40" />
    </filter>
    <path
      d="M425.615 0.54521C476.821 -1.31461 498.204 34.7028 492.036 71.24C485.896 107.829 452.179 144.886 419.518 181.489C386.767 218.194 355.045 254.393 301.22 286.151C247.539 317.91 171.989 345.127 115.624 346.773C59.2309 348.368 22.2855 324.344 7.79955 291.821C-6.80383 259.349 1.31474 218.329 39.2521 181.889C77.0721 145.499 144.828 113.639 219.162 77.8651C293.497 42.0916 374.409 2.40503 425.615 0.54521Z"
    />
  </svg>
);
export default SvgLightSpot2;
