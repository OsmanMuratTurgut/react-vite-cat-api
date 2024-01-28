import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <>
      <div
        className={` min-h-screen  
                    ${darkMode ? "dark" : ""}`}
      >
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container mx-auto">Ana Sayfa</div>
      </div>
    </>
  );
}

export default App;
