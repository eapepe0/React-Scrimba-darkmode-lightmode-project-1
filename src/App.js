import React from "react";
import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  // const useState inicializadas en falso

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
    // de verdadero a falso o viceversa
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* llamamos el componente con la prop darkmode y con la funcion  */}
      <Main darkMode={darkMode} toogleDarkMode={toggleDarkMode} />
      {/* llamamos el componente con la prop darkmode y con la funcion  */}
    </div>
  );
}
