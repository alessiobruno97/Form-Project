import React from "react";
import Home from './pages/Home';
import Summary from './pages/Summary';
import './components/InputReact.css';
import './pages/Summary.css'
import {
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route exact path="/summary" element={<Summary />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}