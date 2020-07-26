import React, { Component } from 'react'
import MemberService from '../../../service/MemberService'

import MemberCard from './Member-card'
import MemberForm from '../Member-form'

import './Member-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class MemberList extends Component {

    constructor() {
        super()
        this.state = {
            members: undefined,
            showModal: false
        }
        this.memberService = new MemberService()
    }

    componentDidMount = () => this.updateMemberList()
    

    updateMemberList = () => {
        this.memberService
            .getAllMembers()
            .then(response => this.setState({ members: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })

    handleMemberSubmit = () => {
        this.handleModal(false)
        this.updateMemberList()
    }

    
    render() {
        return (
  
            <>
            <Container as="main" className="members-list">

                <h1>Listado de miembros</h1>
                <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Añadir nuevo usuario</Button>

                {
                    !this.state.members ? <h3>CARGANDO...</h3> :

                        <Row>
                            {this.state.members.map(elm => <MemberCard key={elm._id} {...elm} />)}

                        </Row>

                }

            </Container>

            <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <MemberForm handleMemberSubmit={this.handleMemberSubmit} />
                    </Modal.Body>
                </Modal>


            </>
        )
    }
}

export default MemberList