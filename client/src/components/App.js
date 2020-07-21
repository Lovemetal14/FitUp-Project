import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import UserList from './users/User-list/User-list';


function App() {
  return (

    <Switch>
      <Route path="/users" render={() => <UserList />} />
    </Switch>
 
  )
}

export default App;
