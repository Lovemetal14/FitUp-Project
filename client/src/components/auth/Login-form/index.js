import React, { Component } from 'react'

import AuthService from '../../../service/AuthService'

import './login-form.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .login(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.handleToast(true, 'Sesión Iniciada')
                this.props.history.push('/profile')
            })
            .catch(err => console.log(err.response.data.message))   // Error handling yay!
    }

    render() {
        return (
            <Container as="main">

                <Row>

                    <Col md={{ offset: 3, span: 6 }}>
                        <Card bg="light" className= "logcard">

                        <h2>Inicio de sesión</h2>

                        <hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group>
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.username} name="username" type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" />
                                <Form.Text className="text-muted">Mínimo tres caracteres, please.</Form.Text>
                            </Form.Group>

                            <Button variant="dark" type="submit">Inicia sesión</Button>
                        </Form>

                        </Card>
                    </Col>
                    
                </Row>


            </Container>
        )
    }
}

export default LoginForm