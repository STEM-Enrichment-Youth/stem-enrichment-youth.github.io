import React from "react";
import "./NewTeam.css";
import Navbar from "../Navbar.js";
import Card from "./TeamCard";
import defaultInstructor from "../icons/head-brains.png";
import navaneet from "./InstructorImages/navaneet.jpg";
import sakshi from "./InstructorImages/sakshi.png";
// import aniketh from "./InstructorImages/";




export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar />
        <div class="new-team">
            <h1>Events</h1>
            <div class="con">

                <Card
                    imgURL={navaneet}
                    name="Navaneet Kadaba"
                    position="Chief Technology Officer"
                    des="Navaneet Kadaba is a freshman studying Computer Science at Georgia Institute of Technology. He is orginally from the Bay Area and graduated from Homestead High School. He is the CTO of STEMEY."
                />

                <Card
                    imgURL={sakshi}
                    name="Sakshi Sivaraman"
                    position="Website Design Member"
                    des=""
                />

                <Card
                    imgURL={defaultInstructor}
                    name="Aniketh Prasad"
                    position="Lead Lab Developer"
                    des=""
                />


            </div>
        </div>
    </div>
    )
}
// imgURL name des