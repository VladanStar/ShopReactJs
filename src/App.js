import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} >
            <Route path="/singlId" element={<Single/>}/>
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element ={<NotFound/>}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );

};

export default App;
