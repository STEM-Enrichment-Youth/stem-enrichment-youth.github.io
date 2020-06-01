import React from "react";
import classNames from "classnames"; 
import { Toolbar, AppBar, Button, Typography, IconButton} from '@material-ui/core';  
import { withStyles } from 'material-ui/styles';
import Menu from "./Menu"; 
function Navbar(props) {

    const marginT = {marginRight: "20px", textDecoration: "none", color: "inherit"}; 

    return (
        <nav class="navbar navbar-expand-lg navbar-dark sticky"  style={{opacity: "0.95", zIndex: "500", width:"100%", backgroundColor: "transparent", boxShadow: "5px 10px 12px black"}}>
            <a class="navbar-brand" href="/" style={{color : "white", letterSpacing: "2px"}}>STEMEY</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{margin: "auto"}}>
                <ul class="navbar-nav mr-auto" style={{position: "sticky", top:"0"}}>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{zIndex: 999}}>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    {/* <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>*/}
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <Button href="/team" variant="contained" style={marginT}>Team</Button>
                    <Button href="/login" variant="contained" style={marginT}>Login</Button>
                    <Button href="/register" variant="contained" style={marginT}>Register</Button>
                    <Menu/> 
                </form>
            </div>
        </nav>
    )
    
}


export default Navbar;
// appbar, toolbar, iconbutton, typography, button 