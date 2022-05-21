import React from "react";
import "./NewTeam.css";
import Card from "./TeamCard";
import diana from "./InstructorImages/diana.jpg";
// import arun from "./InstructorImages/arun.jpg";
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
                    imgURL={diana}
                    name="Diana Poplacenel"
                    position="Chief Executive Officer"
                    des="     Diana Poplacenel is the co-founder of STEM Enrichment Youth, and a founding member and officer of Leigh High School’s Biology & Chemistry Olympiad, Science Bowl, and Science National Honors Society clubs. She is passionate about the intersection between biology and computer science, and has taken HarvardX and Johns Hopkins’ Neuroscience and Bioinformatics courses. She is a semifinalist in the USA Biology Olympiad and a former student at the Biomedical Engineering Innovation Program at Johns Hopkins. She currently leads the Computer Science Connect RWC Class at STEMEY. "
                />
                <Card
                    name="Katherine Liu"
                    imgURL={katherine}
                    position="Chief Operating Officer"
                    des="Katherine Liu is a senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. She has participated in math competitions since middle school, and she is an AIME Qualifier, scoring a 9 on the AIME this year. Her other activities include competitive dance and drawing, which she has won several awards and achievements in."
                />
                <Card
                    name="Faith Han"
                    imgURL={faith}
                    position="Chief Marketing Officer"
                    des="Faith Han is a junior and the founder and president of both the HeForShe club, which works with the United Nations to advocate for gender equality, and Leigh’s Team HBV chapter that works with Stanford’s Asian Liver Center to raise awareness of Hepatitis B. She also attended Stanford’s Youth Leadership Conference as well as Summer Springboard’s Exploratory Academy for Medicine taught by professors from Yale and MIT. Faith has also gone to Nepal to complete a medical internship. She also volunteers at Good Samaritan Hospital as well as Sky Ensemble where she is co-president and flute section leader. Her other passions include playing volleyball and has played on JV for the past two years and was captain as well. She looks forward to finding ways to help STEMEY grow!"
                />
                <Card
                    name="Maariyah Kharal"
                    imgURL={maariyah}
                    des="Maariyah Kharal is an undergraduate student at New York University on the Pre-Health track. She is involved in clinical volunteering, research, and advocacy. She is the founder of Lean on Us Foundation through which she raises funds and awareness for cognitive disease research. Maariyah has also received many service awards and research certificates. She is passionate about encouraging others to pursue STEM and is excited to serve as CCO of STEMEY!"
                    position="Chief Communications Officer"

                />
                <Card
                    name="Justin Liu"
                    imgURL={justin}
                    position="Secretary"
                    des="Justin Liu is a senior at Leigh High School. He is an officer of the Science National Honors Society and co-president of the Physics Olympiad. He is a member of National Honors Society and California Scholarship Federation, Link Crew, and he is also a peer tutor at Leigh. He got a 36 on the ACT. Outside of school, he volunteers at Friends of Children with Special Needs and works at Kumon. He is fluent in Mandarin and English. He plays the bassoon, clarinet, and piano. Also, Justin does fencing competitively and is the alternate for the 2020 USA National Team while also part of the mentor program on his club team. He is looking forward to teaching Math at STEMEY."

                />

                <Card
                    name="Sophie Takmopoulos"
                    imgURL={sophie}
                    position="Chief Administrative Officer"
                    des="Sophie Takmopoulos is a senior at Sanford H. Calhoun High School in Merrick, NY. In school, she is a part of Science Olympiads, National Science Honor Society, National Honors Society, Math Honors Society, a co-founder of C.O.P.E. (Collectively Overcoming Problems Effectively) a mental health initiative club and the Vice President of Calhoun’s Sophomore Class. Outside of school she is a director of Project Positivity an, organization that spreads resources relating to balance, wellness, and self-esteem, and she also writes medical/biology related articles for Techvik Blog. She also enjoys playing tennis, art, journaling and philosophy on her free-time."
                />



            </div>
        </div>
    </div>
    )
}
// imgURL name des