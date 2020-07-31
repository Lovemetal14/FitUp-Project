import React, { Component } from 'react'
import RoutineService from '../../../service/RoutineService'

import RoutineCard from './Routine-card'
import RoutineForm from '../Routine-form'

import './Routine-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Spinner from '../../ui/Spinner/'

class RoutineList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            routines: undefined,
            showModal: false
        }
        this.routineService = new RoutineService()
    }

    componentDidMount = () => this.updateRoutineList()


    updateRoutineList = () => {
        this.routineService
            .getAllRoutines()
            .then(response => this.setState({ routines: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })

    handleRoutineSubmit = () => {
        this.handleModal(false)
        this.updateRoutineList()
    }


    render() {
        return (

            <>
                <Container as="main" className="routines-list">


                    <Card bg="dark" text="light" border="light" className="air">

                        <h1>Lista de rutinas de entrenamiento</h1>
                    </Card>



                    <Button onClick={() => this.handleModal(true)} variant="light" size="lg" style={{ marginBottom: '20px' }}>Añadir nueva rutina</Button>

                    {
                        !this.state.routines ? <Spinner /> :

                            <Row>
                                {this.state.routines.map(elm => <RoutineCard key={elm._id} {...elm} />)}

                            </Row>

                    }

                </Container>

                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <RoutineForm loggedInUser={this.props.loggedInUser}  handleRoutineSubmit={this.handleRoutineSubmit} />
                    </Modal.Body>
                </Modal>


            </>
        )
    }
}

export default RoutineList