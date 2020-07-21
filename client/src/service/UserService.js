import axios from 'axios'

export default class UserService {

    constructor(){
        this.service = axios.create({
            baseURL: 'http://localhost:5000/users'
        })
    }

    getAllUsers = () => this.service.get('/getAllUsers')
}