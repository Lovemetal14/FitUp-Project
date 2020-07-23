import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import Navigation from './ui/navbar'
import UsersList from './users/User-list/'
import UserDetail from './users/User-detail/'
import UserForm from './users/User-form/'


function App() {

  return (
    <>

    <Navigation />

      <Switch>
        <Route exact path="/users" render={() => <UsersList />} />
        <Route path="/users/new" render={() => <UserForm />} />
        <Route path="/users/:user_id" render={props => <UserDetail {...props} />} />

      </Switch>
      
    </>
  )
}

export default App;
