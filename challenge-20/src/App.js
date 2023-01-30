import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './pages/aboutMe';
import Resume from './pages/Resume'
// import AppRouter from "./AppRouter"
import "bootstrap/dist/css/bootstrap.min.css";



export default function App() {
  return (
    <div >

<Navbar />
<AboutMe />
{/* <AppRouter /> */}

    </div>
  );
}
