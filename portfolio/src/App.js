import React, { useContext } from 'react';

import { ThemeContext } from './contexts/ThemeContext';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MoreInfo from "./components/MoreInfo";
import Footer from "./components/Footer";


function App() {

  const { lightMode } = useContext(ThemeContext);

  return (
    <div className={` App content ${lightMode ? 'light-mode' : ''}`}>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
