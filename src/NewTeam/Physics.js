import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import fiona from "./InstructorImages/fiona.png"; 
import liza from "./InstructorImages/liza.jpg"; 
import defaultInstructor from "../icons/head-brains.png";
import tanvirao from "./InstructorImages/tanvirao.jpeg";
import keshavnarang from "./InstructorImages/keshavnarang.png";
import marksandey from "./InstructorImages/marksandey.png";
import srinjoy from "./InstructorImages/srinjoy.png";


export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
        <h1>Physics</h1>
        <div class="con">
            
                <Card
                    imgURL={srinjoy}
                    name="Srinjoy Chatterjee"
                    position="Physics Instructor"
                    des = "Srinjoy is a junior at Mission San Jose High School and has always been very passionate about teaching. His areas of expertise lie primarily in the areas of biology, physics, and math, and has been tutoring for four years now. He has ranked nationally in the USA Biology Olympiad and has also qualified for the USA Physics Olympiad and AIME, and has also competed in several other competitions, such as the Intermediate Biology Olympiad and the International Medicine Olympiad. In addition, he’s captain of his school’s Science Bowl team, and also competes in Science Olympiad. When he's not studying, teaching, or practicing for Science Bowl, he can also be found arranging music for the piano or cooking! He’s really excited to be teaching the molecular biology and physics classes as part of STEMEY this year."
                />

                <Card
                    imgURL={tanvirao}
                    name="Tanvi Rao"
                    position="Physics Instructor"
                    des = "Tanvi Rao is a junior at the American School in London who is extremely passionate in physics, mathematics, and community engagement. She has completed various physics courses and has tutored with several student-led organizations. Tanvi is also interested in working with organizations who are contributing to cancer research. For the past two years, she has volunteereed at Cancer Research UK and recently co-founded the youth-led organization Cancer Together. In her spare time, Tanvi is a dancer and pianist. She is extremely excited to further develop her skills and share her passion of physics by creating content and helping students with the Physics Team at STEMEY!"
                />

                <Card
                    imgURL={marksandey}
                    name="Mark Sandey"
                    position="Physics Instructor"
                    des = "Mark Sandey is a junior at Arcadia High School in California and is passionate about fields in pure maths and theoretical physics. He is the secretary of the Astrophysics club at AHS and currently spends his free time learning abstract algebra and playing video games. Mark loves to teach other people about topics in mathematics and in physicsand will often opt to help other people with math and physics homework if they need it. He took APCSA last year and got a 5, too. Mark is also a part of AHS's top band as a clarinetist but also has a passion for guitar (if anyone plans to make a class on the physics of music, he'd love to be a part of it). This year he plans to teach Physics at STEMEY and is excited to teach as prart of an organization for the first time ever!"
                />
                

                <Card
                    name="Keshav Narang"
                    position="Physics Instructor"
                    des = ""
                />
                
            </div>
        </div>
    </div>
    )
}
// imgURL name des