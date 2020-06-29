import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import sudhir from "./InstructorImages/sudhir.jpeg"; 
import liza from "./InstructorImages/liza.jpg"; 
import aryan from "./InstructorImages/aryan.JPG"; 
import domonkos from "./InstructorImages/domonkos.jpeg"; 
import defaultInstructor from "../icons/head-brains.png";
 

export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <div class="con">
                
                <Card
                imgURL={aryan}
                name="Aryan Mathur"
                des="
                Aryan Mathur is a rising senior at Leigh High School. He is the founder of Debate Club and the Vice President of AI and USACO club. He is a coding enthusiast who has experience in Java and Javascript, and is currently a USACO silver. He has had teaching experience volunteering for the First Tee of Silicon Valley to teach young kids golf. He has also been the captain of the Leigh High School Varsity Golf team for the last two years and has earned multiple awards in league competitions as well as outside competitions. He will be leading the coding course that will be offered at STEMEY, and is looking forward to working on this amazing volunteering opportunity. 
"
                position="Coding Director"
                />
                
                <Card
                imgURL={liza}
                name="Liza George"
                position="
 Coding Instructor"
                des="
                Liza is a rising Senior in Leigh, and is passionate about all things Computer Science. She’s been self-studying various programming concepts since middle school (currently focussing on web design), and is in USACO Silver. Her interests in both computer science and mechanical engineering were expanded last year in the AP Computer Science and Physics 1 courses. Outside of her academics, Liza’s involved in Leigh's clubs; she's the President of the Robotics and Girls Who Code clubs, and holds senior officer positions in the Science Olympiad, LEOs, NHS, and NAHS branches at Leigh. Liza is also a flautist, and played in the Leigh Marching Band and Wind Ensemble. She's excited to get to know everyone over the next few months in STEMEY!
"
                />
                <Card
                name="Vaibhav Shukla"
                position="Coding Instructor"
                imgURL={defaultInstructor}
                des="Vaibhav is a rising sophomore at Leigh. He’s self-learned programming since middle school, and does it for fun, along with playing the piano.  Math, however, led him to score as the highest individual scorer in his school for Mathcounts. He also participated and represented his school in the SCVMA Math Field Day (The LeapFrog Competition) with his partner and won 7th place."
                 /> 
                <Card
                name="Domonkos Keszei"
                imgURL={domonkos}
                position="Coding Instructor"
                des="
Domi is a rising sophomore at Leigh High School. He has been teaching 10-12 year old scouts about Hungarian culture and language for 2 years. He is responsible for communications and technology for his troop. He has had an interest in computers for as long as he can remember, and has started to learn programming in 5th grade. He has been learning many languages culminating in a larger scale project written in Python. In the last year he taught himself basic skills in Linux, SQL, and GitHub to facilitate the functions of the Python project. 
"
                /> 
                <Card
                name='Sakshi Srinivasan'
                imgURL={defaultInstructor}
                position="Coding Instructor"
                des="
Sakshi is a rising junior at Leigh High School. She is a member of the National Honor Society and Coding Club, as well as vice president of the Girls Who Code Club at Leigh. She has completed programming courses in and outside of school, including the Programming Methodologies in Java course at Foothill College, as well as AP Computer Science A in the past year. She serves as an assistant instructor at CodeLinkd to teach elementary schoolers coding and lego robotics, and has 3+ years of experience tutoring in various subjects (mainly math) at the Sunnyvale Public Library. She has tutored other high schoolers in math up to Algebra 2/Trig at the Students for Success Center at Fremont High School. Additionally, she has participated and won prizes in a few hackathons. She is looking forward to co-instructing the Coding and Algebra/Geometry classes at STEMEY :).
"   
                 /> 
                
                <Card
                name="Arun Yadavalli"
                position="Coding Instructor"
                des="
Arun is a rising junior at Leigh. He is an officer of LEOs at Leigh, an organizing committee member of the badminton team, varsity badminton player, a member of the Leigh robotics club, California Scholarship Federation, Leigh Science Olympiad for two years and a member of Dartmouth science olympiad for three years. He has taken AP Computer Science A as well as some others and has experience coding in JAVA. Arun has a keen interest in robotics and has won awards in multiple FTC robotics competitions. As of now he is making software for a company,  scheduling meetings with various professional badminton players  around the globe for online meetings with the Leigh Badminton team, and also studying for the deadly SAT. In his spare time Arun practices violin, talks to his friends, bakes, cooks, bikes, and codes. He is looking forward to teaching some JAVA :)
"       
                imgURL={defaultInstructor}
                /> 
                <Card
                    name="Joshua Li"
                    position="Coding Instructor"
                    des="
Joshua Li is a rising Junior at Leigh High School. Some of the things he loves to do are sports, as he is part of the Leigh badminton team, as well as coding, as he is currently preparing for Alphastar Silver. On top of that, he enjoys volunteering in CSF for things he is passionate about such as coaching NJB basketball teams with a few of his friends. Through volunteering in the STEMEY program, Josh seeks to spread his passion for coding to many other kids.
"       
                    imgURL={defaultInstructor}
                 />

               
            </div>
        </div>
    </div>
    )
}
// imgURL name des