import React from "react";
import Navbar from "./Navbar.js";
import { Component } from "react";
import logo from "./stemworld2logo.png"
import schedule from "./stemworld2schedule.jpg"
import sponsor1 from "./stemworld2sponsor1.png"
import sponsor2 from "./stemworld2sponsor2.png"
import { Container, Row, Col } from 'react-grid-system';



export default function Join() {

    return (
        <div style={{ background: "url(" + { logo } + ")", backgroundImage: "cover", backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div style={{ width: "90%", marginLeft: "5%" }}>

                <div class="new-team-join">
                    <h1>Apply!</h1>
                    <p>Fill Out this Application Form and we will get back to you as soon as we can!</p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwgqpZKa7d7nW4ydWOULRwlTt41kIZ2Z_2-mr1ZcwhGShoOQ/viewform?embedded=true" width="640" height="2817" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
    )
}

