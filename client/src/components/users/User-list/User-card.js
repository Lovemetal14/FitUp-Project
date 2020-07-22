import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'

const UserCard = ({ name, surname, photo, country }) => {
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
                    <Button variant="dark" size="lg" block>Info detallada</Button>
                </Card.Body>
            </Card>

        </Col>


    )
}

export default UserCard