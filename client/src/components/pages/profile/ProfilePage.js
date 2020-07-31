import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import RoutineCard from '../../routines/Routines-list/Routine-card'

import routinesServices from '../../../service/RoutineService'

import Spinner from '../../ui/Spinner'

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            favourite_routines: []
        }
        this.routinesServices = new routinesServices()
    }

    componentDidMount = () => {
        this.routinesServices.getAllFavRoutines(this.props.loggedInUser._id)
            .then(response => this.setState({ favourite_routines: response.data.favourite_routines }))
            .catch(err => console.lof(err))
    }

    render() {
        return (
            <>
                <Container as="main" className="profile-page well">
                    <Card bg="light" className="logcard">

                        <Card.Header className="well">
                            <h1 >¡Hola, {this.props.loggedInUser.username}!</h1>
                            <hr></hr>
                        </Card.Header>
                        <Card.Body className="light">

                            <h2>Estas son tus rutinas favoritas</h2>
                            <hr></hr>
                            {
                                !this.state.favourite_routines ? <Spinner /> :

                                    <Row>
                                        {this.state.favourite_routines.map(elm => <RoutineCard key={elm._id} {...elm} />)}

                                    </Row>

                            }

                        </Card.Body>

                    </Card>
                </Container>
            </>
        )
    }



}

export default Profile

// import React, { Component } from 'react'
// import RoutineService from '../../../service/RoutineService'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import RoutineCard from '../../routines/Routines-list/Routine-card'

// import Card from 'react-bootstrap/Card'
// import Spinner from '../../ui/Spinner'

// const Profile = props => {

//     class RoutineList extends Component {

//         constructor(props) {
//             super(props)
//             this.state = {
//                 routines: undefined,

//             }
//             this.routineService = new RoutineService()
//         }

//         componentDidMount = () => this.updateRoutineList()


//         updateRoutineList = () => {
//             this.routineService
//                 .getAllRoutines()
//                 .then(response => this.setState({ routines: response.data }))
//                 .catch(err => console.log(err))
//         }



//         render() {

//             return (
//                 <>
//                     <Container as="main" className="profile-page">
//                         <Card bg="light" className="logcard">

//                             <Card.Header>
//                                 <h1>¡Hola, {props.loggedInUser.username}!</h1>
//                                 <br></br>
//                                 <h2>Estas son tus rutinas favoritas</h2>
//                             </Card.Header>
//                             <Card.Body className="light">

//                                 {
//                                     !this.state.routines ? <Spinner /> :

//                                         <Row>
//                                             {this.state.routines.map(elm => <RoutineCard key={elm._id} {...elm} />)}

//                                         </Row>

//                                 }


//                             </Card.Body>


//                         </Card>
//                     </Container>
//                 </>
//             )

//         }

//     }
// }
// export default Profile
