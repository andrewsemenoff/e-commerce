import * as React from "react";
import { SVGProps } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <>
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z" />
    </svg>

    {/* <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>clock</title>
    </svg> */}
  </>
);
export default SvgClock;
