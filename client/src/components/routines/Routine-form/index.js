import React, { Component } from 'react'
import RoutineService from '../../../service/RoutineService'

import ExerciseService from '../../../service/exercisesService'

import AuthService from '../../../service/AuthService'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class RoutineForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            type: '',
            muscleGroup: '',
            exercise1: '',
            exercise2: '',
            exercise3: '',
            author:this.props.loggedInUser._id// id del autor

        }
        this.routineService = new RoutineService()
        this.exerciseService = new ExerciseService()
        this.authService = new AuthService()
    }


    componentDidMount = () => this.updateExerciseList()

 

    updateExerciseList = () => {
        this.exerciseService
            .getAllExercises()
            .then(response => this.setState({ exercises: response.data }))
            .catch(err => console.log(err))
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
                        <option>Selecciona objetivo rutina</option><option>Perdida grasa</option><option>Ganar músculo</option><option>Especial Gluteo</option><option>Especial Playa</option>
                            <Form.Text className="text-muted">Selecciona objetivo de la rutina.</Form.Text>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Grupo muscular</Form.Label>
                        <Form.Control as="select" onChange={this.handleInputSelectMuscleGroup} value={this.state.muscleGroup}  >
                        <option>Selecciona grupo muscular</option><option>Pectoral</option><option>Hombros</option><option>Espalda</option><option>Biceps</option>
                            <option>Triceps</option><option>Cuadriceps</option><option>Femoral</option><option>Gemelo</option><option>Gluteo</option>
                            <Form.Text className="text-muted">Selecciona grupo muscular.</Form.Text>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Selecciona Ejercicio 1</Form.Label>

                        <Form.Control as="select" name="exercise1" onChange={this.handleInputChange}>

                            <option>Seleccionar</option>

                            {this.state.exercises && this.state.exercises.map(elm =>
                               <option value={elm._id} key={elm._id}> {elm.name} </option> )}
                            
                        </Form.Control>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Selecciona Ejercicio 2</Form.Label>

                        <Form.Control as="select" name="exercise2" onChange={this.handleInputChange}>
                        <option>Seleccionar</option>
                            {this.state.exercises && this.state.exercises.map(elm =>
                               <option value={elm._id} key={elm._id}> {elm.name} </option> )}
                            
                        </Form.Control>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Selecciona Ejercicio 3</Form.Label>

                        <Form.Control as="select" name="exercise3" onChange={this.handleInputChange}>
                        <option>Seleccionar</option>
                            {this.state.exercises && this.state.exercises.map(elm =>
                               <option value={elm._id} key={elm._id}> {elm.name} </option> )}
                            
                        </Form.Control>

                    </Form.Group>



                    <Button variant="dark" type="submit">Añadir</Button>
                </Form>

            </>
        )
    }
}

export default RoutineForm