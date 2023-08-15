import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen app">
      <Header />
      {/* <Intro />
        <Projects />
        <AboutMe />
        <Skills />
        <ContactMe /> */}
    </div>
  );
}

export default App;
