import axios from 'axios'

export default class ExerciseService {

    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/exercises'
        })
    }

    getAllExercises = () => this.service.get('getAllExercises')

}