import * as React from "react";
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <g clipPath="url(#a)">
      <path
        {...props}
        // fill="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 13.5v8m6-12v18m6-12v4m6-8v13.628m6-19.628v24"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
