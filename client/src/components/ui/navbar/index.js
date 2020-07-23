import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {



    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Fit App Clients & Trainers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#users">Usuarios</Nav.Link>
                    <Nav.Link href="#routines">Rutinas</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>

    )


}

export default Navigation