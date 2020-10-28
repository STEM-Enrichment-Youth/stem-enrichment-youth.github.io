import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SND from "./SND";
import Navbar from "./Navbar";
import Footer from './Footer';
import Home from "./Home";
import NewTeam from "./NewTeam/NewTeam";
import NewClasses from "./Classes/NewClasses";
import ChemistryClass from "./Classes/Chemistry"; import BiologyClass from "./Classes/Biology";
import NeuroscienceClass from "./Classes/Neuroscience"; import MathClass from "./Classes/Math";
import PhysicsClass from "./Classes/Physics"; import CodingClass from "./Classes/Coding";

import AnimalCellLab from "./Labs/AnimalCellLab"; import PlantCellLab from "./Labs/PlantCellLab";

import Biology from "./NewTeam/Biology"; import Chemistry from "./NewTeam/Chemistry";
import Neuroscience from "./NewTeam/Neuroscience"; import Math from "./NewTeam/Math";
import Physics from "./NewTeam/Physics"; import Coding from "./NewTeam/Coding";
import Podcast from "./NewTeam/Podcast"; import Events from "./NewTeam/Events";
import Tech from "./NewTeam/Tech";
import Join from "./Join";
import Login from "./Login";
import Discord from "./Discord";
import Donate from "./Donate";
import Contact from "./Contact";
import STEMWorld from "./STEMWorld";
import STEMTober from "./STEMTober";
import STEMSpeakers from "./STEMSpeakers";
import Sponsorship from "./Sponsorship";
import Executives from "./NewTeam/Executives";
import About from "./About";
import { Nav } from "react-bootstrap";


export default function App() {
  return (
    <Router>

      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar />
        <Switch>

          {/* <Route path="/activities">
            
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
          <Route path="/discord">

            <Discord />
          </Route>

          <Route path="/partnerships">
            < SND />
          </Route>

          <Route path="/stemworld">

            < STEMWorld />
          </Route>
          <Route path="/stemtober">

            < STEMTober />
          </Route>
          <Route path="/nerdcon">

            < STEMWorld />
          </Route>
          <Route path="/login">

            < Login />
          </Route>
          <Route path="/stemworldspeakers">

            < STEMSpeakers />
          </Route>
          <Route path="/sponsorship">

            < Sponsorship />
          </Route>
          <Route path="/chemistry-class">
            <ChemistryClass />
          </Route>
          <Route path="/executives">
            <Executives />
          </Route>
          <Route path="/biology-class">
            <BiologyClass />
          </Route>
          <Route path="/math-class">
            <MathClass />
          </Route>
          <Route path="/neuroscience-class">
            <NeuroscienceClass />
          </Route>
          <Route path="/physics-class">
            <PhysicsClass />
          </Route>
          <Route path="/coding-class">
            <CodingClass />
          </Route>

          <Route path="/animalcell-lab">
            <AnimalCellLab />
          </Route>
          <Route path="/plantcell-lab">
            <PlantCellLab />
          </Route>

          <Route path="/teach">
            <Join />
          </Route>
          <Route path="/about">

            <About />
          </Route>

          <Route path="/donate">

            <Donate />
          </Route>


          <Route path="/contact">

            <Contact />
          </Route>


          <Route path="/team">
            <NewTeam />
          </Route>
          <Route path="/classes">

            <NewClasses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
