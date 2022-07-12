import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as userService from '../../utilities/users-service'
const propic1 = require("../../images/profile-icon1.png")
const propic2 = require("../../images/profile-icon2.png")
const propic3 = require("../../images/profile-icon3.png")
const propic4 = require("../../images/profile-icon4.png")
const propic5 = require("../../images/profile-icon5.png")
const propic6 = require("../../images/profile-icon6.png")

const images = [propic1,propic2,propic3,propic4,propic5,propic6]

export default function NavBarreact({ user, setUser, clickedProfile, setClickedProfile, inputHandler}) {

    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        setClickedProfile("")
        userService.logOut()
        // Update state will also cause a re-render
        setUser(null)
    }


  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">MERNFLEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" navbarScroll>
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/movies">Movies</Link>
            <Link className='nav-link' to="/tvshows">TV Shows</Link>
          </Nav>
          <Nav>
          <Form className="nav-form">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onInput={inputHandler}
            />
          </Form>
            {clickedProfile ? 
            <Link className="profile-link nav-link" to={`/profiles/${user.user._id}`}>
            <div>
                <img 
                    className = "nav-profile-icon" 
                    src={images[clickedProfile.ProfileImg]} 
                    alt="" ></img>
            {clickedProfile.ProfileName}
            </div>
            </Link>
            :
            <></>
}
            <Link className='Logout nav-link' to="#memes" onClick={handleLogOut}>
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
