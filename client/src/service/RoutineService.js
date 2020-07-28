import axios from 'axios'

export default class RoutineService {

    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/routines'
        })
    }

    getAllRoutines = () => this.service.get('/getAllRoutines')
    getOneRoutine = id => this.service.get(`/getOneRoutine/${id}`)
    createRoutine = member => this.service.post(`/newRoutine`, member)
}