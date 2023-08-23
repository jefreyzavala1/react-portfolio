import Header from "./components/Header/Header";

import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const App = () => {
  const contextValue = useContext(ThemeContext);
  return (
    <div id="top" className={`${contextValue.themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default App;
