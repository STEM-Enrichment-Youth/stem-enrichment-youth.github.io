import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import catherine from "./InstructorImages/catherineZhou.jpeg"; 
import yulia from "./InstructorImages/yulia.JPG"; 
import deven from "./InstructorImages/deven.png"; 
import vijaya from "./InstructorImages/vijaya.jpg"; 
import diana from "./InstructorImages/diana.jpg"; 

export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <h3 class="team-subtitle">STEMEY's Neuroscience class is created by The NeuroKidz and Bay Area Society for Neuroscience Youth.</h3>
        
        <div class="con">
                <Card
                    imgURL={diana}
                    name="Diana Poplacenel"
                    des="Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a founding member of Science Bowl and Science Olympiad. She is the co-founder of STEM Enrichment Youth and a core team member of Bay Area Society for Neuroscience Youth. She has experience working with middle school students as an official percussion instructor for Union Middle School. She has completed Harvard’s three Fundamentals of Neuroscience courses as well as four of John Hopkins Bioinformatics courses through Coursera, and is currently in the Biomedical Engineering Innovation program at John Hopkins.  She is also a semifinalist in the USA Biology Olympiad."
                    position = "Neuroscience Class Co-Director"
                />
               
               <Card
                    name="Nethra Srinivasan"
                    imgURL="http://www.theneurokidz.org/uploads/1/2/5/7/125755346/editor/nethrapic-bh-7thgr_1.jpg?1561174437"
                    des="

                    Nethra is a student at Leland High School with an ardor for neuroscience and physiology. She loves neuroscience because of the many uncharted territories left to discover and learn about. Apart from the brain, she enjoys dance, art, and traveling to exotic destinations. Nethra is excited to empower others through education!
Nethra is also the Founder of the NeuroKidz, a nonprofit organization dedicated to teaching interactive neuroscience lessons to underpriviledged kids."
                    position="Neuroscience Class Co-Director"
                />
               
                <Card
                    name="Deven Shah"
                    imgURL={deven}
                    des="

                    Deven is a rising junior at The Harker School. His first experience with chemistry came through his passion studying the brain, where he learned about electrochemical gradients and ionic radius trends in order to understand how neurons fire. Last year, he took Honors Chemistry, losing two points total throughout the entire course. As a result, he self-studied the AP Chemistry test, filling in the gaps in his knowledge. 
"
                    position="Neuroscience Instructor"
                />
                <Card 
                name="Catherine Zhou"
                imgURL = {catherine}
                position = "Neuroscience Instructor"
                des = "Catherine is a rising sophomore at Lynbrook. She is an officer of Lynbrook Pre-Med Club and Film Club, and she’s an active member of Team HBV, WiSTEM, and DECA. She has self-studied AP biology and chemistry, and has taken biochemistry, organic chemistry, and several other STEM courses online. Additionally, she has participated in Science Olympiad for three years, placing top 5 at invitationals, regionals, and states. She is passionate about biomedical research, and has won awards in multiple science fairs such as Synopsys. Currently, she is conducting research about polyphenolic secondary metabolites that have therapeutic potential in neurodegenerative diseases. Outside of STEM, Catherine enjoys tutoring English through Paper Airplanes, playing basketball, drawing, and filmmaking."

                />
                <Card
                    name="Yulia Anashkina"
                    imgURL={yulia}
                    des="
Yulia Anashkina is a rising sophomore with a passion for STEM. She earned straight A’s throughout middle school and freshman year. Her interests in STEM led her to complete Harvard’s Fundamentals of Neuroscience, and one of BYU’s math courses. At school she also participates in clubs such as Design Thinking and Bring Change to Mind. Outside of academics Yulia is a figure skater who competes individually as well as in a team. Her team, San Francisco Ice Theater, recently traveled to France and earned a ranking as fifth in the world. She is also a member of the Peninsula Skating Club Junior Board which helps the skating community through volunteering, fundraising, as well as other events. 
"
                    position="Neuroscience Instructor"

                />
                <Card
                    name="Vijaya Vegesna"
                    imgURL={vijaya}
                    des="
                    Vijaya Vegesna is a Junior at Lynbrook High School. She is very interested in learning more about neuroscience, specifically neuroprosthetics and neuroengineering. Her favorite SfN event is any guest speaker event where she can learn more about the broad aspects of neuroscience. Apart from SfN, she loves volunteering, taekwondo, and baking with her friends."
                    position="Neuroscience Instructor"

                />
                <Card
                    name="Harini Pootheri"
                    imgURL='https://ca.slack-edge.com/T015G72ALKW-U015G3XR1D1-129583f29892-192'
                    des="
                    Harini is currently a junior at Palo Alto High School. She does competitive swimming, plays water polo, and is on the debate team. She also is in the Neuroscience club. In her free time, she enjoys drinking boba tea, hanging out with cats, volunteering, and doing calligraphy lettering. Her main passion is Neuroscience. She reads many research articles and books on this subject because she thinks it extremely fascinating. Harini is specifically interested in the impacts of neurodegenerative diseases. She has volunteered at a daycare for seniors afflicted with Alzheimer’s and seen the effects neurodegeneration has on everyday life. Harini hopes to continue her interest in Neuroscience through her higher education.
" 
                    position="Neuroscience Instructor"

                />
            </div>
        </div>
    </div>
    )
}
// imgURL name des