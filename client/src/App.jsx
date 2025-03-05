import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MostVisite from "./components/MostVisite";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";
import Catagory from "./pages/Catagory";

const App = () => {
  return (
    <div>
      <Hero/>
      <Catagory/>
      <Hotels/>
      <MostVisite/>
    </div>
  );
};



export default App;
