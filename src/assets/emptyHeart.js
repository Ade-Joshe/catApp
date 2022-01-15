import React from "react";
import Svg, { Path } from "react-native-svg";

export function EmptyHeart() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <Path
        stroke="#212227"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.63 3.458a4.125 4.125 0 00-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 002.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 000-5.835v0z"
        opacity="0.3"
      ></Path>
    </Svg>
  );
}