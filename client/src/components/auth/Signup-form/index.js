import React, { Component } from 'react'

import AuthService from '../../../service/AuthService'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()

        console.log(this.props)
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                //this.props.handleToast(true, 'Registro completado')
                this.props.history.push('/Profile')
            })
            .catch(err => console.log(err))  // Error handling yay!
    }

    render() {
        return (
            <Container as="main">

                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <Card bg="light" className="logcard">
                            <h3>Registro de usuario</h3>

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

                                <Button variant="dark" type="submit">Registrarme</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default SignupForm