import React, { Component } from 'react'
import MemberService from '../../../service/MemberService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MemberForm extends Component {
    constructor() {
        super()
        this.state = {
            photo: '',
            memberNumber: '',
            role: '',
            name: '',
            surname: '',
            gender: '',
            weight: '',
            height: '',
            dateOfBirth: '',
            country: '',
        }
        this.memberService = new MemberService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleInputSelect = e => {
        this.setState({role: e.target.value })
        
        // this.setState({gender: e.target.value })
        }

        //GESTIONAR MULTIPLES INPUTS CON SELECT VALUE
    // handleInputSelect = e => {   
    //     this.setState({gender: e.target.value })
    // }    

    handleFormSubmit = e => {
        e.preventDefault()
        this.memberService
            .createMember(this.state)
            .then(() => this.props.handleMemberSubmit())
            .catch(err => console.log(err))
            
    }

    render() {
        return (

            <>
                <h3>Nuevo Usuario</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                        <Form.Text className="text-muted">Con buena letra, please.</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.surname} name="surname" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Rol</Form.Label>
                        <Form.Control as="select" onChange={this.handleInputSelect} value={this.state.role}  > 
                        <option>Client</option><option>Trainer</option>
                        </Form.Control>
                    </Form.Group>                        

                    {/* <Form.Group>    //GESTIONAR MULTIPLES INPUTS CON SELECT VALUE
                        <Form.Label>Sex</Form.Label>
                        <Form.Control as="select" onChange={this.handleInputSelect} value={this.state.gender}  > 
                        <option>Hombre o Mujer</option><option>Male</option><option>Female</option>
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group>
                        <Form.Label>Sex</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.gender} name="gender" type="text" />
                    </Form.Group>                                

                    <Form.Group>
                        <Form.Label>Altura</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.height} name="height" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Peso</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.weight} name="weight" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fecha nacimiento</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.dateOfBirth} name="dateOfBirth" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>País</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.country} name="country" type="text" />
                    </Form.Group>            

                    <Form.Group>
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.photo} name="photo" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Número socio</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.memberNumber} name="memberNumber" type="text" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Añadir</Button>
                </Form>
            </>
        )
    }
}

export default MemberForm