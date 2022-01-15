import { createContext } from "react";

export const theme = {
    colors: {
        black: "#212227",
        red: "#DE0202",
        grey: "#d3d3d4"
    }
};

export const ThemeContext = createContext(theme);