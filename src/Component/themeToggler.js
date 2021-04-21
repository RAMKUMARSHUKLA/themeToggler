import React, { useContext } from "react";
import ThemeContext from "../Context/themeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span>{themeMode === "light" ? "Turn Off" : "Turn On"}</span>
    </div>
  );
};

export default ThemeToggler;
