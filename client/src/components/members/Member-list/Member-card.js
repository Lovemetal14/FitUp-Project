import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const MemberCard = ({ _id, name, surname, photo, country }) => {
    return (
        <Col md={4}>
            <Card className="member-card" border="dark">
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title><h3>{name} {surname}</h3></Card.Title>
                    <Card.Title>Country: {country}</Card.Title>
                    <Card.Text>
                    {name} cuenta con amplia experiencia en competición la cual aplica a todos sus clientes
                    sea cual sea su objetivo.
            </Card.Text>
            <Link to={`/members/${_id}`} className="btn btn-dark btn-block btn-sm">Info detallada</Link>
                </Card.Body>
            </Card>

        </Col>


    )
}

export default MemberCard