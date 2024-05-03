import React, { useState } from "react";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";
import Services from "./sections/services/Services";
import DarkModeContext from './DarkModeContext';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main>
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <NavBar />
        <Header />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </DarkModeContext.Provider>
    </main>
  );
}

export default App;
