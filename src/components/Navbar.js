import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';



const Navbar = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;


  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);


  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" data-testid="link" href="/">
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
            <a className="nav-link" data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me! <span className="sr-only"></span>
            </a>
          </li>


          <li className={`nav-link active ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          {categories.map((category) => (
            <li
              className={`nav-link ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;