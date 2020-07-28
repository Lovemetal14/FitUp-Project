import React, { Component } from 'react'
import RoutineService from '../../../service/RoutineService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class RoutineForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            type: '',
            muscleGroup: '',
            exercises: '',

        }
        this.routineService = new RoutineService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleInputSelect = e => {
        this.setState({ type: e.target.value })
    }

    handleInputSelectMuscleGroup = e => {
        this.setState({ muscleGroup: e.target.value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.routineService
            .createRoutine(this.state)
            .then(() => this.props.handleRoutineSubmit())
            .catch(err => console.log(err))

    }

    render() {
        return (

            <>
                <h3>Nueva Rutina</h3>
                <hr></hr>
                <Form onSubmit={this.handleFormSubmit}>

                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.title} name="title" type="text" />
                        <Form.Text className="text-muted">Titulo de la rutina.</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control as="select" onChange={this.handleInputSelect} value={this.state.type}  >
                            <option>loseFat</option><option>gainMuscle</option><option>bootyWork</option><option>beachWork</option>
                            <Form.Text className="text-muted">Selecciona objetivo de la rutina.</Form.Text>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Grupo muscular</Form.Label>
                        <Form.Control as="select" onChange={this.handleInputSelectMuscleGroup} value={this.state.muscleGroup}  >
                            <option>Chest</option><option>Shoulders</option><option>Back</option><option>Biceps</option>
                            <option>Triceps</option><option>Cuadriceps</option><option>Hams</option><option>Gluteo</option><option>Calves</option>
                            <Form.Text className="text-muted">Selecciona grupo muscular.</Form.Text>
                        </Form.Control>
                    </Form.Group>
                    
                    {/* Array en lugar de multiples option */}
                    {/* <Form.Group>
                        <Form.Label>Grupo muscular</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} value={this.state.value} multiple={true}
                            value={["Chest", "Shoulders", "Back", "Biceps", "Triceps", "Cuadriceps", "Hams", "Calves"]}>
                            <Form.Text className="text-muted">Selecciona grupo muscular.</Form.Text>
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group>
                        <Form.Label>Altura</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.height} name="height" type="number" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Peso</Form.Label>
                        <Form.Control onChange={this.handleInputChange} value={this.state.weight} name="weight" type="number" />
                    </Form.Group>


                    <Button variant="dark" type="submit">Añadir</Button>
                </Form>
            </>
        )
    }
}

export default RoutineForm