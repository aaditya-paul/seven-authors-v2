import * as React from "react";
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <path
      {...props}
      fill="none"
      stroke="#E12F3B"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 18.5a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5 2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 1 18.5Z"
    />
    <path
      fill="none"
      {...props}
      stroke="#E12F3B"
      strokeWidth={2}
      d="M11 8.5A3.75 3.75 0 1 0 11 1a3.75 3.75 0 0 0 0 7.5Z"
    />
  </svg>
);
export default SvgComponent;
