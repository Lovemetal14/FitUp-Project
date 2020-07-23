import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const UserCard = ({ _id, name, surname, photo, country }) => {
    return (
        <Col md={4}>
            <Card className="user-card">
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{name} {surname}</Card.Title>
                    <Card.Title>Country: {country}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
            </Card.Text>
            <Link to={`/users/${_id}`} className="btn btn-dark btn-block btn-sm">Info detallada</Link>
                </Card.Body>
            </Card>

        </Col>


    )
}

export default UserCard