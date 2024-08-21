// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/"> &nbsp; Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-4">
                    <Nav.Link as={Link} to="/Respuesta12">Respuesta 1 y 2</Nav.Link>
                    <Nav.Link as={Link} to="/Respuesta3">Respuesta 3</Nav.Link>
                    <Nav.Link as={Link} to="/Respuesta4">Respuesta 4</Nav.Link>
                    <Nav.Link as={Link} to="/Respuesta5">Respuesta 5</Nav.Link>
                    <Nav.Link as={Link} to="/Respuesta6">Respuesta 6</Nav.Link>
                    <Nav.Link as={Link} to="/Respuesta7">Respuesta 7</Nav.Link>
                    <Nav.Link as={Link} to="/Respuesta8">Respuesta 8</Nav.Link>
                    <Nav.Link as={Link} to="/Respuesta9">Respuesta 9</Nav.Link>
                    <Nav.Link as={Link} to="/Formulario">Formulario</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
