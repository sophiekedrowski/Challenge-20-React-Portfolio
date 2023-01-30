import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
import AboutMe from './pages/aboutMe';
import Resume from './pages/Resume'
import Contact from './pages/Contact'
// import AppRouter from "./AppRouter"
import "bootstrap/dist/css/bootstrap.min.css";



export default function App() {
  return (
    <div className="container">
<Navbar />
<AboutMe />
<Resume />
<Contact />
    </div>

  );
}
