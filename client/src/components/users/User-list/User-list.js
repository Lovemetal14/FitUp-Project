import React, { Component} from 'react'
import UserService from './../../../service/UserService'

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            users: undefined
        }
        this.UserService = new UserService()
    }

    componentDidMount = () => {
        this.UserService.getAllUsers()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <>

            <h1>Se supone que soy los usuarios</h1>
            
            </>
        )
    }
}

export default UserList