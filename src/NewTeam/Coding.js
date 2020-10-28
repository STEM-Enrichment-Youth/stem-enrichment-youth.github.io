import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import liza from "./InstructorImages/liza.jpg"; 
import aryan from "./InstructorImages/aryan2.jpg"; 
import sakshi from "./InstructorImages/sakshi.png";
import arun from "./InstructorImages/arun.jpg";
import ethan from "./InstructorImages/ethan.jpeg";
import diana from "./InstructorImages/diana.jpg"; 
import brian from "./InstructorImages/brian.jpeg"; 


export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
        <h1>Computer Science</h1>
        <div class="con">
        <Card
                    imgURL = {diana}
                    name = "Diana Poplacenel"
                    position = "Chief Executive Officer"
                    des="     Diana Poplacenel is the co-founder of STEM Enrichment Youth, and a founding member and officer of Leigh High School’s Biology & Chemistry Olympiad, Science Bowl, and Science National Honors Society clubs. She is passionate about the intersection between biology and computer science, and has taken HarvardX and Johns Hopkins’ Neuroscience and Bioinformatics courses. She is a semifinalist in the USA Biology Olympiad and a former student at the Biomedical Engineering Innovation Program at Johns Hopkins. She currently leads the Computer Science Connect RWC Class at STEMEY. "
                /> 
                <Card
                imgURL={aryan}
                name="Aryan Mathur"
                des="
                Aryan Mathur is currently a senior at Leigh High School. He is the Founder and Chief Executive Officer of Caravan LLC and has has a wide experience in leading organizations and creating strategic plans for improvements for businesses both internally and externelly. He is also the founder of Debate Club and the Vice President of AI and USACO club. He is a coding enthusiast who has experience in Java, Javascript, Go-lang and Typescript and is currently a USACO silver. He has had teaching experience volunteering for the First Tee of Silicon Valley to teach young kids golf. He has also been the captain of the Leigh High School Varsity Golf team for the last two years and has earned multiple awards in league competitions as well as outside competitions. Linkedin: www.linkedin.com/in/aryan-mathur "
                position="Chief Strategy Officer & Computer Science Instructor"
                />
                
                
                <Card
                imgURL={liza}
                name="Liza George"
                position="
 Computer Science & Set Theory Instructor"
                des="Liza is a Senior in Leigh, and is passionate about all things Computer Science. She’s been self-studying various programming concepts since middle school (currently focussing on web design), and is in USACO Silver. She took AP Computer Science last year, and a series of CS and math courses in Stanford Summer Sessions last summer. Outside of her academics, Liza’s involved in Leigh's clubs; she's the President of the Robotics and Girls Who Code clubs, and holds senior officer positions in the Science Olympiad, LEOs, NHS, and NAHS branches at Leigh. Liza is also a flautist, and played in the Leigh Marching Band and Wind Ensemble. She's excited to get to know everyone over the next few months in STEMEY!"
                />
                
                <Card
                name='Sakshi Sivaraman'
                imgURL={sakshi}
                position="Computer Science Instructor & Web Design Team Member"
                des="
                Sakshi is a junior at Leigh High School. She is a member of the National Honor Society and Coding Club, as well as vice president of the Girls Who Code Club at Leigh. She has completed programming courses in and outside of school, including the Programming Methodologies in Java course at Foothill College, as well as AP Computer Science A in the past year. She serves as an assistant instructor at CodeLinkd to teach elementary schoolers coding and lego robotics, and has 3+ years of experience tutoring in various subjects (mainly math) at the Sunnyvale Public Library. She has tutored other high schoolers in math up to Algebra 2/Trig at the Students for Success Center at Fremont High School. Additionally, she has participated and won prizes in a few hackathons. She is looking forward to instructing the CS class at STEMEY, as well as helping out with the website design :).                " 
                 /> 
                
                <Card
                name="Arun Yadavalli"
                position="Chief Research Officer & Computer Science Instructor"
                des="
Arun is a rising junior at Leigh. He is an officer of LEOs at Leigh, an organizing committee member of the badminton team, varsity badminton player, a member of the Leigh robotics club, California Scholarship Federation, Leigh Science Olympiad for two years and a member of Dartmouth science olympiad for three years. He has taken AP Computer Science A as well as some others and has experience coding in JAVA. Arun has a keen interest in robotics and has won awards in multiple FTC robotics competitions. As of now he is making software for a company,  scheduling meetings with various professional badminton players  around the globe for online meetings with the Leigh Badminton team, and also studying for the deadly SAT. In his spare time Arun practices violin, talks to his friends, bakes, cooks, bikes, and codes. He is looking forward to teaching some JAVA :)
"       
                imgURL={arun}
                /> 
                {/* <Card
                    name="Joshua Li"
                    position="Coding Instructor"
                    des="
Joshua Li is a rising Junior at Leigh High School. Some of the things he loves to do are sports, as he is part of the Leigh badminton team, as well as coding, as he is currently preparing for Alphastar Silver. On top of that, he enjoys volunteering in CSF for things he is passionate about such as coaching NJB basketball teams with a few of his friends. Through volunteering in the STEMEY program, Josh seeks to spread his passion for coding to many other kids.
"       
                    imgURL={defaultInstructor}
                 /> */}
                 <Card
                    name = "Ethan Weisberg"
                    des = "Ethan is a senior at the Packer Collegiate Institute. He is a high school researcher at the NYU Biomedical Chemistry Institute, researching peptoid macrocycle cancer therapeutics in the Kirshenbaum Lab. For his research he was the first place national delegate to the Junior Science and Hummanities Symposium from the New York Metro region. He founded Pelican Protein Folding, Packer's Folding@home team of students using their computers to help researchers study proteins and drug candidates related to COVID-19. He also organized a multi-school competition of Folding@home teams. Ethan is an avid debater leading the Packer Speech and Debate team his junior and senior year, focusing on educating novice debaters. He also founded the Packer Philosophy Club, as well as Packer's Competitive Computing Club. Recently, he has been appointed a leader of Intersections, Packer's STEM magazine. When not pursuing these interests, Ethan loves to give back, serving as a tutor at Learn in Shelter, an organization devoted to supporting students through remote learning. Ethan is very excited to share his knowledge of coding and its diverse applications with a wonderful group of students at STEMEY."
                    imgURL = {ethan}
                    position = "Computer Science Instructor"

                 />
                 <Card
                    name = "Brian Lam"
                    position = "Anatomy and Computer Science Instructor"
                    des = "Brian Lam is a junior at Arcadia High School in California. He enjoys learning anything new and interesting, particularly in STEM. He is planning to be a part of the CS and Anatomy Classes at STEMEY."
                    imgURL = {brian}

                />  

               
            </div>
        </div>
    </div>
    )
}
// imgURL name des