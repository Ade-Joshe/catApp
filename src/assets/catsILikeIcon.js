import React from "react";
import Svg, { Path } from "react-native-svg";

export function CatsILikeIcon({ color }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="22"
            fill="none"
            viewBox="0 0 25 22"
        >
            <Path
                fill={color}
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22.077 2.994a5.959 5.959 0 00-8.429 0L12.5 4.143l-1.148-1.149a5.96 5.96 0 00-8.429 8.428l1.149 1.149 8.428 8.428 8.428-8.428 1.149-1.149a5.96 5.96 0 000-8.428v0z"
            ></Path>
        </Svg>
    );
}
