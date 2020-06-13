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
import Biology from "./NewTeam/Biology"; import Chemistry from "./NewTeam/Chemistry"; 
import Neuroscience from "./NewTeam/Neuroscience"; import Math from "./NewTeam/Math"; 
import Physics from "./NewTeam/Physics"; import Coding from "./NewTeam/Coding"; 
import Join from "./Join"; 
import Contact from "./Contact"; 

export default function App() {
  return (
    <Router>
        
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          {/* <Route path="/activities">
            <Navbar/> 
            <Activities/>
          </Route> */}
          <Route path="/biology">
            <Biology/>
          </Route>
          <Route path="/chemistry">
            <Chemistry/>
          </Route>
          <Route path="/neuroscience">
            <Neuroscience/>
          </Route>
          <Route path="/math">
            <Math/>
          </Route>
          <Route path="/physics">
            <Physics/>
          </Route>
          <Route path="/coding">
            <Coding/>
          </Route>

          <Route path="/teach">
            <Join/> 
          </Route>


          <Route path="/contact">
            <Navbar/> 
            <Contact/> 
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
