import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AllRoutes from "./pages/Routes/AllRoutes";

function App() {
  // to toggle theme
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // for light mode
    if (theme === "light") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#f1f1f1");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#2F327D"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#545AE7");
      document.documentElement.style.setProperty("--shade", "#d7dcf8");
    }
    // else {
    //   document.documentElement.style.setProperty("--sixty-pr-color", "#2C1F4A");
    //   document.documentElement.style.setProperty("--thirty-pr-color", "#fff");
    //   document.documentElement.style.setProperty("--ten-pr-color", "#DBC4F0");
    //   document.documentElement.style.setProperty("--shade", "#3a2b5c");
    // }
  });

  return (
    <div className="app">
      {/* BrowswerRouter for all routing */}
      <BrowserRouter>
        {/* Created a page where all routes lies */}
        <AllRoutes theme={theme} setTheme={setTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
