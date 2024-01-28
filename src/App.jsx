import { useState } from "react";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Row from "./components/Row";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FetchCategories from "./pages/fetch/FetchCategories";
import AxiosCategories from "./pages/axios/AxiosCategories";
import RTKQueryCategories from "./pages/rtk-query/RTKQueryCategories"

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
        <Container className="mx-auto">
          <Row>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/fetch-categories" element={<FetchCategories />} />
              <Route path="/axios-categories" element={<AxiosCategories />} />
              <Route path="/rtk-query-categories" element={<RTKQueryCategories />} />
            </Routes>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
