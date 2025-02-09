// src/components/Lightswitch.jsx
import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div className="Lightswitch">
      <img
        src={
          darkMode ? "../img/lightswitch-on.png" : "../img/lightswitch-off.png"
        }
        alt={darkMode ? "Lightswitch on" : "Lightswitch off"}
        onClick={handleClick}
        style={{ cursor: "pointer", width: "50px", height: "50px" }}
      />
    </div>
  );
}

export default Lightswitch;
