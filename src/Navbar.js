import React from "react";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200;
      // console.log(window.scrollY, isTop);
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

      <Link to="/" style={(scrolled ? { color: "white", fontSize: "30px" } : { color: "white", fontSize: "30px" })}>
        STEMEY
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown nav-link active">
            <a style={{ color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)" }}
              class="nav-link dropdown-toggle MuiButtonBase-root MuiButton-root MuiButton-contained" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About Us</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/about">Who We Are</Link>
              <Link class="dropdown-item" to="/contact">Contact Us</Link>
            </div>
          </li>
          <li class="nav-item dropdown active nav-link">
            <a style={{ color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)" }}
              class="nav-link dropdown-toggle MuiButtonBase-root MuiButton-root MuiButton-contained" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Academics</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {/*<Link class="dropdown-item" to="/classes">Classes</Link>*/}
              <Link class="dropdown-item" to="/tutoring">Tutoring</Link>
              {/*<Link class="dropdown-item" to="/tutoring-summer">STEM Summer Camp</Link>*/}
            </div>
          </li>
          <li class="nav-item dropdown nav-link active">
            <a style={{ color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)" }}
              class="nav-link dropdown-toggle MuiButtonBase-root MuiButton-root MuiButton-contained" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Events</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/stemworld">STEM World</Link>
              <Link class="dropdown-item" to="/stemworld2">STEM World II</Link>
              <Link class="dropdown-item" to="/stemtober">STEM-Tober</Link>
            </div>
          </li>
          {/* <li class="nav-item active nav-link">
            <a style={{ color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)" }}
              class="nav-link MuiButtonBase-root MuiButton-root MuiButton-contained" to="/discord" role="button">
              Discord</a>
          </li> */}
          <li class="nav-item dropdown nav-link active">
            <a style={{ color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)" }}
              class="nav-link dropdown-toggle MuiButtonBase-root MuiButton-root MuiButton-contained" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Team</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/executives">Executive Team</Link>
              <Link class="dropdown-item" to="/biology">Biology</Link>
              <Link class="dropdown-item" to="/chemistry">Chemistry</Link>
              <Link class="dropdown-item" to="/physics">Physics</Link>
              <Link class="dropdown-item" to="/math">Math</Link>
              <Link class="dropdown-item" to="/coding">Coding</Link>
              <Link class="dropdown-item" to="/podcast">Podcast</Link>
              <Link class="dropdown-item" to="/events">Events</Link>
              <Link class="dropdown-item" to="/tutoringteam">Tutoring/Activites</Link>
              <Link class="dropdown-item" to="/tech">Tech</Link>
            </div>
          </li>
          <li class="nav-item dropdown nav-link active">
            <a style={{ color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)" }}
              class="nav-link dropdown-toggle MuiButtonBase-root MuiButton-root MuiButton-contained" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Get Involved</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/apply">Apply</Link>
              <Link class="dropdown-item" to="/discord">Discord</Link>
              <Link class="dropdown-item" to="/partnerships">Shop + Donate!</Link>
            </div>
          </li>

          {/* <li class="nav-item active nav-link">
            <a style={{ color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)" }}
              class="nav-link MuiButtonBase-root MuiButton-root MuiButton-contained" href="/apply" role="button">
              Apply</a>
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