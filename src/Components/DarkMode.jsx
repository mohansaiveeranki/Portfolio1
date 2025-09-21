import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "light" : "dark");
  }, [isDark]);

  return (
    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
      {isDark ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
};

export default DarkMode;
