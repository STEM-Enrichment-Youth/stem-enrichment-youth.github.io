import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SND from "./SND"; 
import Navbar from "./Navbar";
import Home from "./Home";
import NewTeam from "./NewTeam/NewTeam";
import NewClasses from "./Classes/NewClasses";
import ChemistryClass from "./Classes/Chemistry"; import BiologyClass from "./Classes/Biology";
import NeuroscienceClass from "./Classes/Neuroscience"; import MathClass from "./Classes/Math";
import PhysicsClass from "./Classes/Physics"; import CodingClass from "./Classes/Coding";

import Biology from "./NewTeam/Biology"; import Chemistry from "./NewTeam/Chemistry";
import Neuroscience from "./NewTeam/Neuroscience"; import Math from "./NewTeam/Math";
import Physics from "./NewTeam/Physics"; import Coding from "./NewTeam/Coding";
import Join from "./Join";
import Donate from "./Donate";
import Contact from "./Contact";
import STEMWorld from "./STEMWorld"; 
import STEMSpeakers from "./STEMSpeakers";
import DonateBenefits from "./DonateBenefits";

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
            <Biology />
          </Route>
          <Route path="/chemistry">
            <Chemistry />
          </Route>
          <Route path="/neuroscience">
            <Neuroscience />
          </Route>
          <Route path="/math">
            <Math />
          </Route>
          <Route path="/physics">
            <Physics />
          </Route>
          <Route path="/coding">
            <Coding />
          </Route>

          <Route path="/snd">
            <Navbar/> 
            < SND /> 
          </Route>

          <Route path="/stemworld">
            <Navbar/> 
            < STEMWorld /> 
          </Route>
          <Route path="/nerdcon">
            <Navbar/> 
            < STEMWorld /> 
          </Route>
          <Route path="/stemworldspeakers">
            <Navbar/> 
            < STEMSpeakers /> 
          </Route>
          <Route path="/sponsorshiplevels">
            <Navbar/> 
            < DonateBenefits /> 
          </Route>
          <Route path="/chemistry-class">
            <Navbar /><ChemistryClass />
          </Route>
          <Route path="/biology-class">
            <Navbar /><BiologyClass />
          </Route>
          <Route path="/math-class">
            <Navbar /><MathClass />
          </Route>
          <Route path="/neuroscience-class">
            <Navbar />  <NeuroscienceClass />
          </Route>
          <Route path="/physics-class">
            <Navbar /> <PhysicsClass />
          </Route>
          <Route path="/coding-class">
            <Navbar /><CodingClass />
          </Route>

          <Route path="/teach">
            <Join />
          </Route>

          <Route path="/donate">
            <Navbar/>
            <Donate />
          </Route>


          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>


          <Route path="/team">
            <NewTeam />
          </Route>
          <Route path="/classes">
            <Navbar />
            <NewClasses />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
