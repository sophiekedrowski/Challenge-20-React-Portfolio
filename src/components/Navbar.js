
import { Outlet, Link } from 'react-router-dom';
import React from 'react'
import Footer from '../pages/Footer';
// import "../../index.css"

function Navbar() {
  return (
    <React.Fragment>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <ul>
          <li>
            <Link to="/aboutme">About Me</Link>

            <Link to="/portfolio">Portfolio</Link>

            <Link to="/contact">Contact Me</Link>

            <Link to="/resume">Resume</Link>



          </li>
        </ul>
      </nav>
      <Outlet />

      <Footer></Footer>

    </React.Fragment>


  );
}


export default Navbar;