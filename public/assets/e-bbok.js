import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    // {...props}
    stroke="none"
    fill="none"
  >
    <path
      {...props}
      stroke="none"
      fill="#fff"
      strokeWidth={0.02}
      d="M3 5a4 4 0 0 1 4-4h14v20H7a4 4 0 0 1-4-4V5Zm2 8.535A4 4 0 0 1 7 13h12V3H7a2 2 0 0 0-2 2v8.535ZM19 15H7a2 2 0 1 0 0 4h12v-4ZM10 5h7v2h-7V5Z"
    />
  </svg>
);
export default SvgComponent;
