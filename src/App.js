import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
