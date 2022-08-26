import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleBot from "./Pages/SingleBot/SingleBot";
import Footer from "./Components/Footer/Footer";
import Loader from "./Pages/Loader/Loader";
import "./App.scss";

function App() {
 document.title = 'Maquette'
  return (
    <div className="app" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/bots/:id" element={<SingleBot />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
