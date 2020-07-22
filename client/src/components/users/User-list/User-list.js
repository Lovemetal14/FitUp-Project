import React, { Component } from 'react'
import UserService from './../../../service/UserService'

import UserCard from './User-card'

import './User-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class UserList extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined
        }
        this.userService = new UserService()
    }

    componentDidMount = () => {
        this.userService
            .getAllUsers()
            //.then(response => console.log(response))
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container as="main" className="users-list">

                <h1>Listado de usuarios</h1>

                {
                    !this.state.users ? <h3>CARGANDO...</h3> :

                        <Row>
                            {this.state.users.map(elm => <UserCard key={elm._id} {...elm} />)}

                        </Row>



                }

            </Container>
        )
    }
}

export default UserList