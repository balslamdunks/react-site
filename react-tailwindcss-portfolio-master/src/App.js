import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TetrisAI from "./components/TetrisAI";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <main className="text-yellow-900 bg-red-200 body-font">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects/TetrisAI" element={<TetrisAI />}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}
