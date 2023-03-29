import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoCamera, faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';


import React from 'react'

const Header = () => {
    return (
        <Navbar bg="dark" varient="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href='/' style={{ "color": "gold" }}>
                    <FontAwesomeIcon className='mx-2' icon={faVideoCamera} /> MovieFlex

                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav
                        className='me-auto my-2 my-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ><div className="nav-text">


                            <ul className="me-auto mb-2 mb-lg-0">
                                <li className="nav-item">

                                    <NavLink className="nav-link text-white" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">

                                    <NavLink className="nav-link text-white" to="/watchList">Watch List</NavLink>
                                </li>

                            </ul>
                        </div>


                    </Nav>
                    {/* <Button varient="outline-info" className="me-2">Login</Button>
                    <Button varient="outline-info" className="me-2">Register</Button> */}

                </Navbar.Collapse>

            </Container>


        </Navbar>
    )
}

export default Header