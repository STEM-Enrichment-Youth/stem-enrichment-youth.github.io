import React from "react";
import classNames from "classnames";
import { Toolbar, AppBar, Button, Typography, IconButton } from '@material-ui/core';
import { withStyles } from 'material-ui/styles';
import Menu from "./Menu";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Navbar(props) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200;
      console.log(window.scrollY, isTop);
      if (!isTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    })
  })

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${scrolled && 'sticky'} ${!scrolled && 'non-sticky'}`}
      style={{ transition: "0.3s", zIndex: "4" }}>

      <a href="/" style={(scrolled ? { color: "white", fontSize: "30px" } : { color: "white", fontSize: "30px" })}>Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active nav-link">
            <Button href="/team" variant="contained">Team</Button>
          </li>
          {/* <li class="nav-item active nav-link">
            <Button href="/login" variant="contained">Login</Button>
          </li>
          <li class="nav-item active nav-link">
            <Button href="/register" variant="contained">Register</Button>
          </li> */}
          <li class="nav-item active nav-link">
            <Button href="/classes" variant="contained">Classes</Button>
          </li>

          {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
        </ul>
      </div>
    </nav>
  )
}




// "/team", "/login", "/register"




//  <Button href="/team" variant="contained">Team</Button>
//  <Button href="/login" variant="contained">Login</Button>
//  <Button href="/register" variant="contained">Register</Button>