import './App.css';
import React from 'react'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
import Login from './login/Login'
import User_edit_main from './User_edit/User_edit_main'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Body/>
          </Route>
          <Route exact path="/edit">
            <User_edit_main/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App