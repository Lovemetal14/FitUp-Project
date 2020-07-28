import React, { Component } from 'react'
import RoutineService from '../../../service/RoutineService'

import RoutineCard from './Routine-card'
import RoutineForm from '../Routine-form'

import './Routine-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class RoutineList extends Component {

    constructor() {
        super()
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

                <h1>Lista de rutinas de entrenamiento</h1>
                <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Añadir nueva rutina</Button>

                {
                    !this.state.routines ? <h3>CARGANDO...</h3> :

                        <Row>
                            {this.state.routines.map(elm => <RoutineCard key={elm._id} {...elm} />)}

                        </Row>

                }

            </Container>

            <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <RoutineForm handleRoutineSubmit={this.handleRoutineSubmit} />
                    </Modal.Body>
                </Modal>


            </>
        )
    }
}

export default RoutineList