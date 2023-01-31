import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import Home from './pages';
import AboutMe from './pages/aboutMe';
// import Resume from './pages/Resume'
// import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  const [categories] = useState()

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
            <AboutMe></AboutMe>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>

  );
}
