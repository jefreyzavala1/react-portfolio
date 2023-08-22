import Header from "./components/Header/Header";

import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import About from "./components/About/About";
const App = () => {
  const contextValue = useContext(ThemeContext);
  return (
    <div id="top" className={`${contextValue.themeName} app`}>
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
};

export default App;
