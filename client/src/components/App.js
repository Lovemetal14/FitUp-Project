import React, { Component } from 'react'
import AuthService from '../service/AuthService'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './ui/navbar'
import Message from './ui/CustomToast'

import MembersList from './members/Member-list/'
import MemberDetail from './members/Member-detail/'
import MemberForm from './members/Member-form/'
import RoutinesList from './routines/Routines-list'
import RoutineDetail from './routines/Routine-detail'
import RoutineForm from './routines/Routine-form'

import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'
import ProfilePage from './pages/profile/ProfilePage'
import Index from './pages/profile/ProfilePage'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: null,
      toast: {
        visible: false,
        text: ''
      }
    }
    this.AuthService = new AuthService()
  }


  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('estado actual de la app: ', this.state))

  fetchUser = () => {

    if (this.state.loggedInUser === null) {
      this.AuthService.LoggedIn()
        .then(response => this.setTheUser(response.data))
        .catch(() => this.setTheUser(false))

    }
    // this.AuthService
    //   .isLoggenIn()
    //   .then(response => this.state.loggedInUser === null && this.setState({ loggedInUser: response.data }))
    //   .catch(err => console.log(err))

  }

  handleToast = (visible, text = '') => {
    let toastCopy = { ...this.state.toast }
    toastCopy = { visible, text }
    this.setState({ toast: toastCopy })
  }


  render() {

    this.fetchUser()



    return (
      <>

        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} /> 

        <Switch>

          <Route path="/profile" render={() =>
            this.state.loggedInUser ? <ProfilePage loggedInUser={this.state.loggedInUser} /> : <Redirect to='/signup' />} />

          <Route exact path="/members" render={() => <MembersList loggedInUser={this.state.loggedInUser} {...this.props} />} />
          <Route path="/members/new" render={() => <MemberForm />} />
          <Route path="/members/:member_id" render={props => <MemberDetail {...props} />} />

          <Route exact path="/routines" render={() => <RoutinesList loggedInUser={this.state.loggedInUser} />} />
          <Route  path="/routines/:routine_id" render={props => <RoutineDetail {...props} />} />

          {/* <Route exact path="/exercises" render={() => <ExercisesList />} /> */}
          <Route path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />  
          {/* <Route path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} /> */}
          {/* <Route path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} /> */}
          <Route path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />


        </Switch>

        <Message {...this.state.toast} handleToast={this.handleToast} />

      </>
    )
  }
}

export default App;
