import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "/src/pages/Home";
import InfoSection from "./pages/InfoSection";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/infosection" element={<InfoSection />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
