import React, { Component } from 'react'
import AuthService from '../service/AuthService'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import Navigation from './ui/navbar'
import MembersList from './members/Member-list/'
import MemberDetail from './members/Member-detail/'
import MemberForm from './members/Member-form/'
import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'


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
  
  render() {


    return (
      <>

        <Navigation />

        <Switch>
          <Route exact path="/members" render={() => <MembersList />} />
          <Route path="/members/new" render={() => <MemberForm />} />
          <Route path="/members/:member_id" render={props => <MemberDetail {...props} />} />
          <Route path="/signup" render={props => <SignupForm {...props}/>} />
          <Route path="/login" render={props => <LoginForm {...props}/>} />

        </Switch>

      </>
    )
  }
}

export default App;
