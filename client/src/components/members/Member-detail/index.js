import React, { Component } from 'react'

import MemberService from '../../../service/MemberService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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

            !this.state.memberDetail ? <h3>CARGANDO...</h3> :

                <Container as="main">
                    <Row>

                        <h1>{this.state.memberDetail.name}</h1>

                        <Col md={{ span: 5 , offset: 1 }}>
                            <p><b>Detalles:</b> {this.state.memberDetail.country}</p>
                            <p><b>Detalles:</b> {this.state.memberDetail.country}</p>
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/members'>Volver</Link>

                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.memberDetail.photo} alt={this.state.memberDetail.name} />

                        </Col>

                    </Row>
                </Container>


        )
    }
}

export default MemberDetail