import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './pages/aboutMe';
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import "bootstrap/dist/css/bootstrap.min.css";
// import Toggle from './components/Toggle';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>

            <Route path="/">
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/" element={<AboutMe />} />
            </Route>

            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/resume"
              element={<Resume />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />

            <Route
              path="/"
              element={<Footer />}
            />

          </Route>
        </Routes>

      </div>
    </Router>

  );
}
