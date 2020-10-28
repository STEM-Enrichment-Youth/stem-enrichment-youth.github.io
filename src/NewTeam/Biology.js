import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import fiona from "./InstructorImages/fiona.png"; 
import yulia from "./InstructorImages/yulia.JPG"; 
import aashvi from "./InstructorImages/aashvi.jpeg"; 
import aiswarya from "./InstructorImages/aiswarya.jpeg"; 
import alexandra from "./InstructorImages/alexandra.jpeg"; 
import arushi from "./InstructorImages/arushi.jpeg"; 
import catherine from "./InstructorImages/catherineZhou.jpeg"; 
import maddy from "./InstructorImages/maddy.jpeg"; 
import priyanka from "./InstructorImages/priyanka.jpeg"; 
import srinjoy from "./InstructorImages/srinjoy.png"; 
import brian from "./InstructorImages/brian.jpeg"; 

import defaultInstructor from "../icons/head-cross.png"; 

export default function Biology() {
    return (<div class="new-team-con">
        <div class="new-team">
        <h1>Biology</h1>
        <h2>Meet our Anatomy and Molecular Biology Team Members</h2>

        <div class="con">
                {/* <Card
                    imgURL = {defaultInstructor}
                    position = "Biology Class Director"
                    name="Aniketh Prasad"
                    des="
Aniketh is a rising senior at Leigh High School. He is a passionate biology student who has taken AP Biology and qualified as a USA Biology Olympiad Semifinalist. He is also studying Neuroscience and Human Biology at Mission College. Aniketh is currently an officer of the California Scholarship Federation and Biology Olympiad Clubs. He has various tutoring experience through his job at the Kumon Math and Reading Center as well as through a tutoring program for underprivileged kids. Aniketh has also participated in peer tutoring through the National Honors Society. During his summer, he attended COSMOS at UCSD and volunteered for various organizations.
"
                />
                 */}
            
                 <Card
                    name = "Priyanka Kalidindi"
                    des = "Priyanka is a junior at Beckman High School. She is passionate about biology, A&P, and neuroscience. She has already taken AP Biology and AP Chemistry, and is currently taking AP Physics 1 and AP Calculus BC. She is a part of California Scholarship Federation, National Honors Society, and Medical Certificate Program. She also competes in HOSA and Science Olympiad. Additionally, she serves as a board member for a school-wide tutoring service at her school as well as the Vice President of a nonprofit called Interstem. She has a passion for mentoring and teaching kids and fulfills it through these activities. Outside of school, Priyanka loves to play tennis, do classical Indian dance, and volunteer at her local hospital and through Second Harvest Food Bank. Here at STEMEY, she is the Anatomy class lead and is also a part of the Events and Outreach Team as well as the Neuroscience team."
                    imgURL = {priyanka}
                    position = "Anatomy Class Co-Lead"

                /> 
                <Card
                    name = "Arushi Singhal"
                    imgURL = {arushi}
                    position = "Anatomy Class Co-Lead"
                    des = "Arushi Singhal is a sophomore at Leigh High School with a passion in human biology. She loves all things science, and plans to pursue a career as a surgeon. Arushi is also an officer of the internationally recognized Interact Club, and is a member of Model United Nations as well. She has taken multtiple Human Anatomy courses from the University of Michigan, and has applied them to her everyday life. As a someone who loves helping people, Arushi volunteers wherever and whenever there are people in need. Apart of academics, Arushi loves running track and playing the violin in the San Jose Youth Symphony. "
                /> 

                <Card
                    name = "Catherine Zhou"
                    imgURL = {catherine}
                    position = "Molecular Biology Class Lead & Anatomy Instructor "
                    des = "Catherine Zhou is a sophomore at Lynbrook. She’s an active member of many STEM-related clubs at her school, and she is an officer of Lynbrook Pre-Med Club. She has self-studied AP biology and chemistry, and has taken biochemistry, organic chemistry, and several other STEM courses online, as she enjoys conducting research in those fields. Additionally, she has placed at regional and state level in Science Olympiad for three years, and she’s an intermediate biology olympiad gold medalist. She is looking forward to leading the molecular biology class as well as being part of the anatomy and events outreach team this fall!"
                /> 
                <Card
                    name="Yulia Anashkina"
                    imgURL={yulia}
                    des = "Yulia Anashkina is a sophomore at Leigh High School. She has a passion for STEM, especially Biology and Neuroscience. She has taken several online courses related to STEM including a neuroscience course from Harvard. Additionally, she is a competitive figure skater who competes individually as well as with SFIT, a team ranked top 5 internationally. She is very excited to be working with STEMEY! "
                    position="Molecular Biology and Anatomy Instructor"

                />
                
                <Card
                    imgURL = {aashvi}
                    position = "Anatomy Instructor"
                    name="Aashvi Wason"
                    des = "Aashvi Wason, a junior at Leigh High Schoool, is very passionate about STEM. She loves biology, especially human anatomy, and is very interested in pursuing a career in medicine. She is in many clubs relating to healthcare such as Team HBV and Future Medical Professionals. Along with that, she is part of the National Honor Society, California Scholarship Federation, Keystone Mentorship, and is the Outreach Director of Operation Purpose. Aashvi enjoys taking lots of classes in STEM, such as AP Chemistry, AP Physics 1, and AP Calculus. In the past, she has taught Biology and Algebra/Geometry at STEMEY. Now she is part of the anatomy team, and is very excited to share her passion about STEM!"
                />

                <Card
                    name = "Aiswarya Saravanan"
                    imgURL = {aiswarya}
                    position = "Anatomy and Molecular Biology Instructor"
                    des = "Aiswarya Saravanan is a rising junior at Plymouth High School from Michigan, USA. She loves all things STEM and activism, and she is super passionate about neuroscience and biomedicial engineering in general. She is part of Simply Neuroscience and STEM Without Boundaries, where she is the Director of Sponsorships. She also recently started her own non-profit organization called Basically Biomedicine to educate people in the biomedical fields. In STEMEY, she is part of the anatomy team, molecular biology team, and the podcast team, and she is super excited to make a difference!"
                /> 

                <Card
                    name = "Alexandra Guo"
                    imgURL = {alexandra}
                    position = "Molecular Biology Instructor"
                    des = "Alexandra is a rising senior at Leigh High School. She is a member of the California Scholarship Federation and is a senior officer for National Honors Society. She also leads praise at her church and is the shift leader for volunteering at Kaiser Permanente. She has experience tutoring and leading through NHS peer tutoring, leading freshmen orientation as a Link Crew Leader, and being a youth leader for her church’s vacation bible school. She looks forward to teaching Biology in STEMEY."
                /> 

                
                <Card
                    name = "Maddy Hoekstra"
                    imgURL = {maddy}
                    position = "Anatomy and Molecular Biology Instructor"
                    des = "Maddy Hoekstra is currently a junior at Leigh High School. She is passionate about all things science, including chemistry and biology. Maddy is currently taking AP Chem, Intro to Kinesiology and AP Calc. She is the Founder and President of Toys for Shelter Animals, Vice President of Best Buddies and Treasurer for Community Companions. Maddy is a member of the National Honor Society, California Scholarship Federation, National Honors Society, Link Crew, and Biomedical Engineering Society. Outside of school, she is passionate about field hockey, volunteering, swimming, tutoring and reading with kids. She also loves coaching children in both field hockey and swimming. She is on the Events Outreach team. Maddy is also planning on teaching Molecular Biology and Chemistry in STEMEY! "
                /> 

                
                <Card
                    name = "Srinjoy Chatterjee"
                    des = "Srinjoy is a junior at Mission San Jose High School and has always been very passionate about teaching. His areas of expertise lie primarily in the areas of biology, physics, and math, and has been tutoring for four years now. He has ranked nationally in the USA Biology Olympiad and has also qualified for the USA Physics Olympiad and AIME, and has also competed in several other competitions, such as the Intermediate Biology Olympiad and the International Medicine Olympiad. In addition, he’s captain of his school’s Science Bowl team, and also competes in Science Olympiad. When he's not studying, teaching, or practicing for Science Bowl, he can also be found arranging music for the piano or cooking! He’s really excited to be teaching the molecular biology and physics classes as part of STEMEY this year."
                    imgURL = {srinjoy}
                    position = "Molecular Biology and Physics Instructor"

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