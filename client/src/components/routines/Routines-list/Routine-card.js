import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const RoutineCard = ({ _id, title, type, muscleGroup, }) => {
    return (
        <Col md={4}>
            <Card className="routine-card">
                {/* <Card.Img variant="top" src={photo} /> */}
                <Card.Body>
                    <Card.Title>Entrenamiento de {muscleGroup}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>Objetivo principal {type}</Card.Title>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
            </Card.Text>
            <Link to={`/routines/${_id}`} className="btn btn-dark btn-block btn-sm">Info detallada</Link>
                </Card.Body>
            </Card>

        </Col>

    )
}

export default RoutineCard