import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  )

 
}

export default App;
