import React, { Component } from 'react'
import UserService from '../../../service/UserService'

import UserCard from './User-card'
import UserForm from './../User-form'

import './User-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class UserList extends Component {

    constructor() {
        super()
        this.state = {
            users: undefined,
            showModal: false
        }
        this.userService = new UserService()
    }

    componentDidMount = () => this.updateUserList()
    

    updateUserList = () => {
        this.userService
            .getAllUsers()
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })

    handleUserSubmit = () => {
        this.handleModal(false)
        this.updateUserList()
    }

    
    render() {
        return (
  
            <>
            <Container as="main" className="users-list">

                <h1>Listado de usuarios</h1>
                <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Añadir nuevo usuario</Button>

                {
                    !this.state.users ? <h3>CARGANDO...</h3> :

                        <Row>
                            {this.state.users.map(elm => <UserCard key={elm._id} {...elm} />)}

                        </Row>

                }

            </Container>

            <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <UserForm handleUserSubmit={this.handleUserSubmit} />
                    </Modal.Body>
                </Modal>


            </>
        )
    }
}

export default UserList