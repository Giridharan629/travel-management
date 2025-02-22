import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MostVisite from "./components/MostVisite";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <MostVisite/>
      <Hotels/>
      <Footer/>
    </div>
  );
};

export default App;
