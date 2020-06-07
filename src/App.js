import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Register from "./Register";
import Login from "./Login"; 
import Navbar from "./Navbar"; 
import Home from "./Home"; 
import Team from "./Team"; 
import useSticky from "./useSticky"; 
import Header from "./Header"; 
import Activities from "./Activities/Activities"; 
import Classes from "./Classes/Classes";
import NewTeam from "./NewTeam/NewTeam";
import NewClasses from "./Classes/NewClasses"; 
import Menu from "./Menu";  

export default function App() {
  return (
    <Router>
        
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/register">
            <Navbar/> 
            <Login
              title="Register"
              formURL="http://localhost:3001/register"
              OAuth="Or Sign Up Using" 
            />
          </Route>
          <Route path="/login">
            <Navbar/> 
            <Login 
              title="Login"
              formURL="http://localhost:3001/login"
              forgot="Forgot Password?"
              OAuth="Or Sign In Using"
            />
          </Route> */}
          <Route path="/activities">
            <Navbar/> 
            <Activities/>
          </Route>
          
          <Route path="/team">
            <NewTeam/>
          </Route>
          <Route path="/classes">
            <Navbar/> 
            <NewClasses/>
          </Route>
          <Route path="/">
            <Navbar/> 
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
