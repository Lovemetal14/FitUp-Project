import React, { Component } from 'react'

import RoutineService from '../../../service/RoutineService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class RoutineDetail extends Component {
    constructor() {
        super()
        this.state = {
            routineDetail: undefined
        }
        this.routineService = new RoutineService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.routine_id

        this.routineService
            .getOneRoutine(id)
            .then(response => this.setState({ routineDetail: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            !this.state.routineDetail ? <h3>CARGANDO...</h3> :

                <Container as="main">
                    <Row>

                        <h1>Entrenamiento {this.state.routineDetail.title} para {this.state.routineDetail.muscleGroup}</h1>

                        <Col md={{ span: 5 , offset: 1 }}>
                            <p><b>Objetivo principal:</b> {this.state.routineDetail.type}</p>
                            <p><b>Detalles:</b> </p>
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/routines'>Volver</Link>

                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.routineDetail.photo} alt={this.state.routineDetail.name} />

                        </Col>

                    </Row>
                </Container>


        )
    }
}

export default RoutineDetail