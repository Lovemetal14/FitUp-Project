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
  

setTheUser = user => this.setState({loggedInUser: user}, () => console.log('estado actual de la app: ', this.state))

fetchUser = () => { 

  if (this.state.loggedInUser === null ) {
    this.AuthService.LoggedIn()
    .then(response => this.setTheUser(response.data))
    .catch(() => this.setTheUser(false))

  } 
  // this.AuthService
  //   .isLoggenIn()
  //   .then(response => this.state.loggedInUser === null && this.setState({ loggedInUser: response.data }))
  //   .catch(err => console.log(err))

}


  render() {

    this.fetchUser()



    return (
      <>

        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} {...this.props}/>

        <Switch>
          <Route exact path="/members" render={() => <MembersList />} />
          <Route path="/members/new" render={() => <MemberForm />} />
          <Route path="/members/:member_id" render={props => <MemberDetail {...props} />} />
          <Route path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />
          <Route path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />


        </Switch>

      </>
    )
  }
}

export default App;
