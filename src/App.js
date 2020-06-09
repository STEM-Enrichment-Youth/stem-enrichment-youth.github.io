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
