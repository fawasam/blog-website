import React from 'react'
import {BrowserRouter as Router , Switch ,Route ,Link} from "react-router-dom"
import Login from './components/login/Login'
import Nav from "./components/nav/Nav"
import Register from './components/register/Register'
import Settings from './components/settings/Settings'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'

const App = () => {
  const user =true ;
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/write">{ user ? <Write/> : <Register/> }</Route>
        <Route path="/settings">{ user ? <Settings/> : <Register/> }</Route>
        <Route path="/post/:postId"><Single/></Route>
        <Route path="/register">{ user ? <Home /> : <Register/> }</Route>
        <Route path="/login">{ user ? <Home /> : <Login/> }</Route>
      </Switch>
    </Router>
  )
}

export default App
