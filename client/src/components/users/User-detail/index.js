import React, { Component } from 'react'

import UserService from '../../../service/UserService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class UserDetail extends Component {
    constructor() {
        super()
        this.state = {
            userDetail: undefined
        }
        this.userService = new UserService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.user_id

        this.userService
            .getOneUser(id)
            .then(response => this.setState({ userDetail: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            !this.state.userDetail ? <h3>CARGANDO...</h3> :

                <Container as="main">
                    <Row>

                        <h1>{this.state.userDetail.name}</h1>

                        <Col md={{ span: 5 , offset: 1 }}>
                            <p><b>Detalles:</b> {this.state.userDetail.country}</p>
                            <p><b>Detalles:</b> {this.state.userDetail.country}</p>
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/users'>Volver</Link>

                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.userDetail.photo} alt={this.state.userDetail.name} />

                        </Col>

                    </Row>
                </Container>


        )
    }
}

export default UserDetail
