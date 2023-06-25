import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MoreInfo from "./components/MoreInfo";
import Footer from "./components/Footer";




function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <MoreInfo />
      <Footer />
    </div>
  );
}

export default App;
