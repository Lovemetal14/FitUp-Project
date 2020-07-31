import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const RoutineCard = ({ _id, title, type, muscleGroup, }) => {
    return (
        <Col md={4}>
            <Card className="routine-card" border="dark">
                {/* <Card.Img variant="top" src={photo} /> */}
                <Card.Body>
                    <Card.Title><h3>Entrenamiento de {muscleGroup}</h3> </Card.Title>
                    <Card.Title><h3>Titulo:</h3> { title}</Card.Title>
                    <Card.Title>- Objetivo principal: {type}</Card.Title>

                    <Card.Text>
                        Centrada en trabajar {muscleGroup} con el objetivo de {type}.
            </Card.Text>
            <Link to={`/routines/${_id}`} className="btn btn-dark btn-block btn-sm">Info detallada</Link>
                </Card.Body>
            </Card>

        </Col>

    )
}

export default RoutineCard