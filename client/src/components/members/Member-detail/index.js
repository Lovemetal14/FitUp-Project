import React, { Component } from 'react'

import MemberService from '../../../service/MemberService'
import Card from 'react-bootstrap/Card'
import './Member-detail.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from '../../ui/Spinner'

import { Link } from 'react-router-dom'

class MemberDetail extends Component {
    constructor() {
        super()
        this.state = {
            memberDetail: undefined
        }
        this.memberService = new MemberService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.member_id

        this.memberService
            .getOneMember(id)
            .then(response => this.setState({ memberDetail: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            !this.state.memberDetail ? <Spinner /> :

                <Container as="main" className="members-detail top">
                    <Card bg="dark" border="danger" text="white">
                        <Card.Header>
                            <h1>{this.state.memberDetail.name} {this.state.memberDetail.surname}</h1>
                        </Card.Header>
                        <Card.Body className="light">
                            <Col md={{ span: 5, offset: 1 }}>
                                <h3><b>País nacimiento:</b> {this.state.memberDetail.country}</h3>
                                <p><b>Altura:</b> {this.state.memberDetail.height} cm</p>
                                <p><b>Peso:</b> {this.state.memberDetail.weight} kg</p>
                                <p><b>Fecha nacimiento:</b> {this.state.memberDetail.dateOfBirth} </p>
                                <hr></hr>
                                

                            </Col>
                            <Col md={{ span: 4, offset: 1 }}>
                                <img src={this.state.memberDetail.photo} alt={this.state.memberDetail.name} />
                                
                                <Link className="btn btn-dark btn-md" to='/members'>Volver</Link>
                            </Col>
                        </Card.Body>
                    </Card>
                </Container>


        )
    }
}

export default MemberDetail