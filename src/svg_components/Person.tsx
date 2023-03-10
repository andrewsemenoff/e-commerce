import * as React from "react";
import { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 14.016q2.531 0 5.273 1.102t2.742 2.883v2.016H3.984v-2.016q0-1.781 2.742-2.883t5.273-1.102zM12 12q-1.641 0-2.813-1.172T8.015 8.015t1.172-2.836T12 3.984t2.813 1.195 1.172 2.836-1.172 2.813T12 12z" />
  </svg>
);
export default SvgPerson;
