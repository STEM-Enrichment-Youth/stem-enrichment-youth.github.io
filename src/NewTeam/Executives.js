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

export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
        <h1>Executive Team</h1>
        <div class="con">
                <Card
                    imgURL = {diana}
                    name = "Diana Poplacenel"
                    position = "Chief Executive Officer"
                    des = "Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a founding member of Science Bowl and Science Olympiad. She is the co-founder of STEM Enrichment Youth and will be leading the neuroscience class. She has experience working with middle school students as an official percussion instructor for Union Middle School. She has completed Harvard’s three Fundamentals of Neuroscience courses as well as four of John Hopkins Bioinformatics courses through Coursera, and is currently in the Biomedical Engineering Innovation program at John Hopkins. She is also a semifinalist in the USA Biology Olympiad."
                /> 
                <Card
                    name = "Katherine Liu"
                    imgURL = {katherine}
                    position = "Chief Operating Officer"
                    des = "Katherine Liu is a rising senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. She has participated in math competitions since middle school, and she is an AIME Qualifier, scoring a 9 on the AIME this year. Her other activities include competitive dance and drawing, which she has won several awards and achievements in."
                /> 
                <Card
                    name="Faith Han"
                    imgURL={faith}
                    position = "Chief Networking Officer"
                    des = "
Faith Han is a rising senior at Leigh High School. She is founder and president of the Team HBV chapter at Leigh that works with Stanford’s Asian Liver Center. She will be attending the Stanford Youth Leadership Conference this summer and is also a member of CSF and NHS. Faith volunteers at Good Samaritan Hospital, Salvation Army, and her church nursery. She has gone to Nepal for a medical internship and on several mission trips to Mexico. She has also completed the Springboard Exploratory Academy for medicine taught by Harvard and MIT professors. She is section leader, co-president and plays the flute in Sky Ensemble. She has also been a part of the school’s JV volleyball team for two years and was captain last year. In her free time she enjoys watching Netflix and spending time with friends. Faith is excited to work with fellow leaders to make sure STEMEY runs smoothly and teach hands-on applications of Biology. 
"
                 />
                <Card 
                    name = "Maariyah Kharal"
                    imgURL = {maariyah}
                    des = "Maariyah is a recent graduate of Leigh High School. She participated in WiSTEM, the Medical Explorers Program, and volunteered at Good Samaritan Hospital. She is pursuing the Pre-Medical Track at New York University. She looks forward to sharing her passion for the life sciences via the Biology course at STEMEY."
                    position = "Chief Communications Officer"

                /> 
                
                
                <Card
                imgURL={aryan}
                name="Aryan Mathur"
                des="
                Aryan Mathur is a rising senior at Leigh High School. He is the founder of Debate Club and the Vice President of AI and USACO club. He is a coding enthusiast who has experience in Java and Javascript, and is currently a USACO silver. He has had teaching experience volunteering for the First Tee of Silicon Valley to teach young kids golf. He has also been the captain of the Leigh High School Varsity Golf team for the last two years and has earned multiple awards in league competitions as well as outside competitions. He will be leading the coding course that will be offered at STEMEY, and is looking forward to working on this amazing volunteering opportunity. 
"
                position="Chief Strategy Officer"
                />

                
                <Card
                name="Arun Yadavalli"
                position="Chief Marketing Officer"
                des="
Arun is a rising junior at Leigh. He is an officer of LEOs at Leigh, an organizing committee member of the badminton team, varsity badminton player, a member of the Leigh robotics club, California Scholarship Federation, Leigh Science Olympiad for two years and a member of Dartmouth science olympiad for three years. He has taken AP Computer Science A as well as some others and has experience coding in JAVA. Arun has a keen interest in robotics and has won awards in multiple FTC robotics competitions. As of now he is making software for a company,  scheduling meetings with various professional badminton players  around the globe for online meetings with the Leigh Badminton team, and also studying for the deadly SAT. In his spare time Arun practices violin, talks to his friends, bakes, cooks, bikes, and codes. He is looking forward to teaching some JAVA :)
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