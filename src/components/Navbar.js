import React from "react";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      {/* si darkMode es true, cambia a nav.dark sino nav solo */}
      <img
        className="nav--logo_icon"
        alt="icon"
        src="./images/react-icon-small.png"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p> {/* cambia el modo */}
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          {/* cambia el modo si es verdadero pasa a falso*/}
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
