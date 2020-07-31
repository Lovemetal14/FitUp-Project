import React, { Component } from 'react'

import RoutineService from '../../../service/RoutineService'

import Card from 'react-bootstrap/Card'
import './Routine-detail.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class RoutineDetail extends Component {
    constructor(props) {
        super(props)
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

    setFavRoute = () => {
        this.routineService.setFavRoutine(this.state.routineDetail._id, this.props.loggedInUser._id)
        .then(response => console.log(response))
        .catch(err=> console.log(err))
    }

    render() {
        return (

            !this.state.routineDetail ? <h3>CARGANDO...</h3> :

                <Container as="main" className="top">
                    <Card bg="dark" border="danger" text="white">
                        <Col>
                            <Card.Header>
                                <h1>Entrenamiento {this.state.routineDetail.title} para {this.state.routineDetail.muscleGroup}</h1>
                            </Card.Header>
                            <Card.Body className="light">
                                <Col >

                                    <h3><b>Titulo: </b> {this.state.routineDetail.title}</h3>
                                    <p><b>Objetivo principal:</b> {this.state.routineDetail.type}</p>

                                    <h3>Ejercicios: </h3>{this.state.routineDetail && this.state.routineDetail.exercises.map(elm =>
                                        <div className="exer" key={elm._id}>{elm.name} - {elm.sets} Series de {elm.reps} repeticiones <br></br> <img src={elm.photo}/><br></br></div>)}

                                    <p><b>Detalles:</b> </p>
                                    
                                    <hr></hr>

                                    <Link className="btn btn-dark btn-md" to='/routines'>Volver</Link>
                                    <button onClick={this.setFavRoute}>Hacer favorita</button>


                                </Col>
 
                            </Card.Body>
                        </Col>
                    </Card>
                </Container>


        )
    }
}

export default RoutineDetail