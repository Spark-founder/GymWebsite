import './App.css';
import React,{useState} from 'react'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
import Login from './login/Login'
import User_edit_main from './User_edit/User_edit_main'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from './User/User';
import News from './News/News'
function App() {
  const [S,setS]=useState('Dhruv')
  console.log(S)
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
            <Login receiveValue={(value) => setS(value)}/>
          </Route>
          <Route exact path="/user">
              <User UserId={'4'}/>
              <h1>{S}</h1>
          </Route>
          <Route exact path="/news">
              <Navbar/>
              <News/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
