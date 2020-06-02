import React from "react"; 
import "./header.css"; 
import Button from "@material-ui/core/Button"; 

export default function Header() {
    return (
        <div class="header">
            <div class="header-text">
                <h1 style={{fontSize : "400%", textTransform: "uppercase", letterSpacing: "10px"}}>Explore STEM</h1>
                <h1 style={{fontSize : "200%", textTransform: "uppercase", letterSpacing: "10px"}}>Expand your knowledge</h1>
                <h1 style={{fontSize: "150%", marginTop: "40px"}}>Biology — Mathematics — Physics — Chemistry — Coding — Astronomy </h1>
                <div class="options" style={{marginTop: "50px"}}>
                    <Button href="/team" variant="contained" style={{marginRight: "20px"}}>Team</Button>
                    <Button href="/team" variant="contained" style={{marginRight: "20px"}}>Team</Button>
                    <Button href="/team" variant="contained" style={{marginRight: "20px"}}>Team</Button>
                </div>
            </div>
            
        </div>
    )
}