import * as React from "react";
import { SVGProps } from "react";
const SvgLightSpot = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 603 303" {...props}>
    <filter id="blur">
      <feGaussianBlur stdDeviation="10" />
    </filter>
    <path
      d="M154.722 299.556C74.9628 307.759 -2.4501 301.47 0.626517 266.632C3.81348 231.679 87.4901 168.176 171.133 114.501C254.775 60.8252 338.522 16.9122 399.275 4.58699C460.001 -7.78946 497.761 11.4731 537.514 31.8614C577.267 52.2497 619.069 73.8663 596.417 109.592C573.654 145.433 486.353 195.55 401.512 232.02C316.836 268.478 234.482 291.353 154.722 299.556Z"
      
    />
  </svg>
);
export default SvgLightSpot;
