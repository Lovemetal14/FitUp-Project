import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navbar.css' 
//import favicon from '../../../../public/favicon.ico'
import AuthService from './../../../service/AuthService'

import { Link, NavLink } from 'react-router-dom'
// import SignupForm from './auth/Signup-form'
// import LoginForm from './auth/Login-form'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.AuthService = new AuthService()

        console.log(this.props)
    }

    logout = () => {
        this.AuthService
            .logout()
            .then(() => {
                this.props.setTheUser(false)
                this.props.handleToast(true, 'Usuario desconectado')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbor" >
                <Navbar.Brand className='navbrand'>
                    <NavLink to="/profile"> Fit App - Crea y encuentra tus rutinas - <img className="dumbell"src='https://image.flaticon.com/icons/png/512/69/69840.png' /> -</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <Nav.Link as="span">
                            <NavLink to="/profile" exact activeStyle={{ color: 'white' }}>Inicio</NavLink>
                        </Nav.Link>


                        {this.props.loggedInUser ?
                            (
                                <>
                                    <Nav.Link as="span">
                                        <NavLink to="/members" activeStyle={{ color: 'white' }}>Miembros</NavLink>
                                    </Nav.Link>

                                    <Nav.Link as="span">
                                        <NavLink to="/routines" activeStyle={{ color: 'white' }}>Rutinas</NavLink>
                                    </Nav.Link>

                                    <Nav.Link as="span">
                                        <p onClick={this.logout}>Cerrar sesión</p>
                                    </Nav.Link>
                                </>

                            ) : (
                                <>

                                    <Nav.Link as="span">
                                        <NavLink to="/login" activeStyle={{ color: 'white' }}>Inicia sesión</NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <NavLink to="/signup" activeStyle={{ color: 'white' }}>Registro</NavLink>
                                    </Nav.Link>

                                </>
                            )
                        }


                        <Nav.Link as="span">
                            <NavLink to="/profile" activeStyle={{ color: 'white' }}>- Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}  : </NavLink>
                        </Nav.Link>

                    </Nav>


                </Navbar.Collapse>

                {/* <Route path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
                <Route path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} /> */}
            </Navbar>


        )
    }

}

export default Navigation

