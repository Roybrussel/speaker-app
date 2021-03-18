import React from "react";
import './App.css';

import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Searchbar from "./Components/Menu/Searchbar/Searchbar";
import Speakers from "./Components/Speakers/Speakers";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu /> 
      <Searchbar />
      <Speakers /> 
      <Footer />
    </div>
  );
}

export default App;
