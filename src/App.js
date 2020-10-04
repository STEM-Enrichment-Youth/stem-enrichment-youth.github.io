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
import Podcast from "./NewTeam/Podcast"; import Events from "./NewTeam/Events";
import Tech from "./NewTeam/Tech";
import Join from "./Join";
import Login from "./Login";
import Donate from "./Donate";
import Contact from "./Contact";
import STEMWorld from "./STEMWorld"; 
import STEMTober from "./STEMTober"; 
import STEMSpeakers from "./STEMSpeakers";
import Sponsorship from "./Sponsorship";
import Executives from "./NewTeam/Executives"; 
import About from "./About"; 


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
          <Route path="/podcast">
            <Podcast />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>

          <Route path="/partnerships">
            <Navbar/> 
            < SND /> 
          </Route>

          <Route path="/stemworld">
            <Navbar/> 
            < STEMWorld /> 
          </Route>
          <Route path="/stemtober">
            <Navbar/> 
            < STEMTober /> 
          </Route>
          <Route path="/nerdcon">
            <Navbar/> 
            < STEMWorld /> 
          </Route>
          <Route path="/login">
            <Navbar/> 
            < Login /> 
          </Route>
          <Route path="/stemworldspeakers">
            <Navbar/> 
            < STEMSpeakers /> 
          </Route>
          <Route path="/sponsorship">
            <Navbar/> 
            < Sponsorship /> 
          </Route>
          <Route path="/chemistry-class">
            <Navbar /><ChemistryClass />
          </Route>
          <Route path="/executives">
            <Navbar /><Executives />
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
          <Route path="/about">
            <Navbar/> 
            <About />
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
