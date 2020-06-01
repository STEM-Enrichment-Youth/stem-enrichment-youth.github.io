import React from "react"; 
import "./header.css"; 
import Button from "@material-ui/core/Button"; 

export default function Header() {

    return (
        <div class="header">
            <div class="header-text" style={{paddingRight: "100px"}}>
                <h1 style={{fontSize : "500%", textTransform: "uppercase"}}>Support Local Restaurants</h1>
                <h1 class="h-txt" style={{marginTop: "40px"}}>Some Description About What We Do</h1>
                <div class="header-nav">
                    <a class="pretty-popup">Donate Now</a>
                    <a class="pretty-popup">Donate Now</a>
                    <a class="pretty-popup">Donate Now</a>
                    <a class="pretty-popup">Donate Now</a>
                </div>
            </div>
            
        </div>
    )
}