import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import Home from './pages';
import AboutMe from './pages/aboutMe';
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from './components/Toggle';
import Footer from './pages/Footer';


export default function App() {
  const [categories, setCategories] = useState([
    { name: 'Resume' },
    { name: 'Portfolio' },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="container">
      <Navbar
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navbar>
      <main>
        {!contactSelected ? (
          <>
            <AboutMe/>
            <Toggle currentCategory={currentCategory}></Toggle>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Portfolio/>
      <Footer/>
    </div>

  );
}
