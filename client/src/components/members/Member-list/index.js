import React, { Component } from 'react'
import MemberService from '../../../service/MemberService'

import MemberCard from './Member-card'
import MemberForm from '../Member-form'

import './Member-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Spinner from '../../ui/Spinner/'

class MemberList extends Component {

    constructor(props) {
        super(props)
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
        console.log("VALOR LIST", this.state.members)
        return (

            <>
                <Container as="main" className="members-list">

                    <Card bg="light" className="air">

                        <h1>Listado de Entrenadores</h1>
                    </Card>


                    {

                        this.props.loggedInUser && <Button onClick={() => this.handleModal(true)} variant="light" size="lg" style={{ marginBottom: '20px' }}>Añadir nuevo usuario</Button>

                    }


                    {
                        !this.state.members ? <Spinner /> :

                            <Row>
                                {this.state.members.map(elm => <MemberCard key={elm._id} {...elm} />)}
                                {/* // return elm.role === "Trainer" ? <MemberCard key={elm._id} {...elm} /> : null })} */}

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