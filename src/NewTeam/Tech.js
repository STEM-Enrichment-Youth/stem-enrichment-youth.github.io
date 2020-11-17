import React from "react";
import "./NewTeam.css";
import Card from "./TeamCard";
import navaneet from "./InstructorImages/navaneet.jpg";
import sakshi from "./InstructorImages/sakshi.png";
import brianado from "./InstructorImages/brianado.jpg";
import yana from "./InstructorImages/yana.jpeg"; 
import diana from "./InstructorImages/diana.jpg"; 




export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Design & Tech</h1>
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
                    des="                Sakshi is a junior at Leigh High School. She is a member of the National Honor Society and Coding Club, as well as vice president of the Girls Who Code Club at Leigh. She has completed programming courses in and outside of school, including the Programming Methodologies in Java course at Foothill College, as well as AP Computer Science A in the past year. She serves as an assistant instructor at CodeLinkd to teach elementary schoolers coding and lego robotics, and has 3+ years of experience tutoring in various subjects (mainly math) at the Sunnyvale Public Library. She has tutored other high schoolers in math up to Algebra 2/Trig at the Students for Success Center at Fremont High School. Additionally, she has participated and won prizes in a few hackathons. She is looking forward to instructing the CS class at STEMEY, as well as helping out with the website design :).                " 

                />

                <Card
                    name="Aniketh Prasad"
                    position="Lead Lab Developer"
                    des="Aniketh is a rising senior at Leigh High School. He is a passionate biology student who has taken AP Biology and qualified as a USA Biology Olympiad Semifinalist. He is also studying Neuroscience and Human Biology at Mission College. Aniketh is currently an officer of the California Scholarship Federation and Biology Olympiad Clubs. He has various tutoring experience through his job at the Kumon Math and Reading Center as well as through a tutoring program for underprivileged kids. Aniketh has also participated in peer tutoring through the National Honors Society. During his summer, he attended COSMOS at UCSD and volunteered for various organizations.
"
                />

<Card
                    name="Briana Do"
                    imgURL={brianado}
                    position="Design Co-Lead"
                    des="Briana Do is a senior at Leigh High School. She is a involved in various leadership and STEM groups including the Science National Honor Society, Leos, Link Crew, and is vice-president of BSA's Venturing Crew 719. She is fluent in english and vietnamese and has experience outside of school tutoring young kids in math and reading.Over the summer, she helped create the acitivites curriculumn for the biology class, created promotional materials for STEM World, and started a small buisness for her artwork. She is currently a part of the events team, helping teach the FCSN live classes, and is the design team co-lead."
                />

<Card
                    imgURL = {yana}
                    name="Yana Samoylova"
                    des= "Yana Samoylova is a senior at Leigh High School who is interested in STEM, education, and art. At school, she has taken AP Chemistry and AP Calculus, and is a member of CSF and NAHS. Outside of school, she works at Kumon and helps kids with reading and math as well as volunteers over Zoom. She runs a weekly educational podcast called Explained: Simply for which she manages research, promotion, and design. She’s done art for the past ten years and been in Leigh’s art program for the past three, taking AP Art and Art 4 this year. She is a Design Team co-lead, algebra instructor and a member of the events and outreach committee. She’s excited to be working with STEMEY!"
                    position="Design Co-Lead"

                />
                <Card
                    imgURL = {diana}
                    name = "Diana Poplacenel"
                    position = "Website Design Team"
                    des="     Diana Poplacenel is the co-founder of STEM Enrichment Youth, and a founding member and officer of Leigh High School’s Biology & Chemistry Olympiad, Science Bowl, and Science National Honors Society clubs. She is passionate about the intersection between biology and computer science, and has taken HarvardX and Johns Hopkins’ Neuroscience and Bioinformatics courses. She is a semifinalist in the USA Biology Olympiad and a former student at the Biomedical Engineering Innovation Program at Johns Hopkins. She currently leads the Computer Science Connect RWC Class at STEMEY. "
                /> 

            </div>
        </div>
    </div>
    )
}
// imgURL name des