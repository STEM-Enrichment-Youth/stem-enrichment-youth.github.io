import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import diana from "./InstructorImages/diana.jpg"; 
import aryan from "./InstructorImages/aryan2.jpg"; 
import arun from "./InstructorImages/arun.jpg";
import faith from "./InstructorImages/faith.png";
import katherine from "./InstructorImages/katherine.jpg"; 
import maariyah from "./InstructorImages/maariyah.jpg"; 
import sophie from "./InstructorImages/sophie.jpeg"; 
import justin from "./InstructorImages/justin.jpg"; 

export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
        <h1>Executive Team</h1>
        <div class="con">
                <Card
                    imgURL = {diana}
                    name = "Diana Poplacenel"
                    position = "Chief Executive Officer"
                    des="     Diana Poplacenel is the co-founder of STEM Enrichment Youth, and a founding member and officer of Leigh High School’s Biology & Chemistry Olympiad, Science Bowl, and Science National Honors Society clubs. She is passionate about the intersection between biology and computer science, and has taken HarvardX and Johns Hopkins’ Neuroscience and Bioinformatics courses. She is a semifinalist in the USA Biology Olympiad and a former student at the Biomedical Engineering Innovation Program at Johns Hopkins. She currently leads the Computer Science Connect RWC Class at STEMEY. "
                /> 
                <Card
                    name = "Katherine Liu"
                    imgURL = {katherine}
                    position = "Chief Operating Officer"
                    des = "Katherine Liu is a senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. She has participated in math competitions since middle school, and she is an AIME Qualifier, scoring a 9 on the AIME this year. Her other activities include competitive dance and drawing, which she has won several awards and achievements in."
                /> 
                <Card
                    name="Faith Han"
                    imgURL={faith}
                    position = "Chief Networking Officer"
                    des = "
                    Faith Han is a junior and the founder and president of both the HeForShe club, which works with the United Nations to advocate for gender equality, and Leigh’s Team HBV chapter that works with Stanford’s Asian Liver Center to raise awareness of Hepatitis B. She also attended Stanford’s Youth Leadership Conference as well as Summer Springboard’s Exploratory Academy for Medicine taught by professors from Yale and MIT. Faith has also gone to Nepal to complete a medical internship. She also volunteers at Good Samaritan Hospital as well as Sky Ensemble where she is co-president and flute section leader. Her other passions include playing volleyball and has played on JV for the past two years and was captain as well. She looks forward to finding ways to help STEMEY grow!
"
                 />
                <Card 
                    name = "Maariyah Kharal"
                    imgURL = {maariyah}
                    des = "Maariyah is a recent graduate of Leigh High School. She participated in WiSTEM, the Medical Explorers Program, and volunteered at Good Samaritan Hospital. She is pursuing the Pre-Medical Track at New York University. She looks forward to sharing her passion for the life sciences via the Biology course at STEMEY."
                    position = "Chief Communications Officer"

                /> 
                <Card 
                    name = "Justin Liu"
                    imgURL = {justin}
                    position = "Secretary"
                    des="Justin Liu is a senior at Leigh High School. He is an officer of the Science National Honors Society and co-president of the Physics Olympiad. He is a member of National Honors Society and California Scholarship Federation, Link Crew, and he is also a peer tutor at Leigh. He got a 36 on the ACT. Outside of school, he volunteers at Friends of Children with Special Needs and works at Kumon. He is fluent in Mandarin and English. He plays the bassoon, clarinet, and piano. Also, Justin does fencing competitively and is the alternate for the 2020 USA National Team while also part of the mentor program on his club team. He is looking forward to teaching Math at STEMEY."

                /> 
                
                <Card
                imgURL={aryan}
                name="Aryan Mathur"
                des="Aryan Mathur is currently a senior at Leigh High School. He is the Founder and Chief Executive Officer of Caravan LLC and has had a wide experience in leading organizations and creating strategic plans for improvements for businesses both internally and externelly. He is also the founder of Debate Club and the Vice President of AI and USACO club. He is a coding enthusiast who has experience in Java, Javascript, Go-lang and Typescript and is currently a USACO silver. He has had teaching experience volunteering for the First Tee of Silicon Valley to teach young kids golf. He has also been the captain of the Leigh High School Varsity Golf team for the last two years and has earned multiple awards in league competitions as well as outside competitions. "
                position="Chief Strategy Officer"
                />

                
                <Card
                name="Arun Yadavalli"
                position="Chief Marketing Officer"
                des="
Arun is a junior at Leigh. He is an officer of LEOs at Leigh, an organizing committee member of the badminton team, varsity badminton player, a member of the Leigh robotics club, California Scholarship Federation, Leigh Science Olympiad for two years and a member of Dartmouth science olympiad for three years. He has taken AP Computer Science A as well as some others and has experience coding in JAVA. Arun has a keen interest in robotics and has won awards in multiple FTC robotics competitions. As of now he is making software for a company,  scheduling meetings with various professional badminton players  around the globe for online meetings with the Leigh Badminton team, and also studying for the deadly SAT. In his spare time Arun practices violin, talks to his friends, bakes, cooks, bikes, and codes. He is looking forward to teaching some JAVA :)
"       
                imgURL={arun}
                /> 
                <Card 
                    name = "Sophie Takmopoulos" 
                    imgURL = {sophie}
                    position = "Chief Administrative Officer"
                    des = "Sophie Takmopoulos is a rising senior at Sanford H. Calhoun High School in Merrick, NY. In school, she is a co-founder of C.O.P.E. (Collectively Overcoming Problems Effectively) a mental health initiative organization and club, a part of Science Olympiads, a member of Dialect (Philosophy Club), and a member of Calhoun’s Literary Magazine: Pegasus and Science Honors Society. She was also the Vice President of Sophomore Class and has been a varisty tennis player since sophomore year. Outside of school she is a member of the TASK Force Youth Advisory Council (Sub-Committee), is a director at the organization Project Positivity, and blogs for the STEAM On Team. She was also accepted into the Stevens Institute of Technology Pre-Medical Biology Summer Program and the Boston Leadership Institute Biomedical Engineering Summer Program."
                /> 
                

               
            </div>
        </div>
    </div>
    )
}
// imgURL name des