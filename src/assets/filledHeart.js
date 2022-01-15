import React from "react";
import Svg, { Path } from "react-native-svg";

export function FilledHeart() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 18 18"
        >
            <Path
                fill="#DE0202"
                stroke="#DE0202"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.63 3.458a4.124 4.124 0 00-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 002.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.124 4.124 0 000-5.835z"
            ></Path>
        </Svg>
    );
}