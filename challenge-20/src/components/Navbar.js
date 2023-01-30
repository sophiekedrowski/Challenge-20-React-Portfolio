import React from "react";



const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Welcome to my portfolio!
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
          <li className="nav-item active">
            <a to="AboutMe" className="nav-link" href="#">
              About me! <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
          <a to="/Resume" className="nav-link" href="#">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;