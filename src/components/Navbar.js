
import { Outlet, Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
import React from 'react'
import Footer from '../pages/Footer';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import "../../index.css"

function Navbar() {
  return (
    <React.Fragment>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Sophie's Portfolio</a>
        <div>
          <ul>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button className='buttons'>Home</Button>
            </LinkContainer>
            <LinkContainer to="/Portfolio">
              <Button className='buttons'>Portfolio</Button>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Button className='buttons'>Contact</Button>
            </LinkContainer>
            <LinkContainer to="/Resume">
              <Button className='buttons'>Resume</Button>
            </LinkContainer>
          </ButtonToolbar>
          </ul>
        </div>
      </nav>
      <Outlet />

      <Footer></Footer>

    </React.Fragment>


  );
}


export default Navbar;