import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import fiona from "./InstructorImages/fiona.png"; 
import yulia from "./InstructorImages/yulia.JPG"; 
import aashvi from "./InstructorImages/aashvi.jpg"; 
import maariyah from "./InstructorImages/maariyah.jpg"; 
import defaultInstructor from "../icons/head-cross.png"; 
import diana from "./InstructorImages/diana.png"; 

export default function Biology() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Biology</h1>
        <div class="con">
                <Card
                    imgURL = {defaultInstructor}
                    position = "Biology Class Director"
                    name="Aniketh Prasad"
                    des="
Aniketh is a rising senior at Leigh High School. He is a passionate biology student who has taken AP Biology and qualified as a USA Biology Olympiad Semifinalist. He is also studying Neuroscience and Human Biology at Mission College. Aniketh is currently an officer of the California Scholarship Federation and Biology Olympiad Clubs. He has various tutoring experience through his job at the Kumon Math and Reading Center as well as through a tutoring program for underprivileged kids. Aniketh has also participated in peer tutoring through the National Honors Society. During his summer, he attended COSMOS at UCSD and volunteered for various organizations.
"
                />
                <Card
                    imgURL={diana}
                    name="Diana Poplacenel"
                    des="Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a founding member of Science Bowl and Science Olympiad. She is the co-founder of STEM Enrichment Youth and will be leading the neuroscience class. She has experience working with middle school students as an official percussion instructor for Union Middle School. She has completed Harvard’s three Fundamentals of Neuroscience courses as well as four of John Hopkins Bioinformatics courses through Coursera, and is currently in the Biomedical Engineering Innovation program at John Hopkins.  She is also a semifinalist in the USA Biology Olympiad."
                    position = "President of Operations"

                />
                <Card
                    imgURL = {maariyah}
                    position = "Biology Lead Instructor"
                    name="Maariyah"
                    des="
 Maariyah is a recent graduate of Leigh High School. She participated in WiSTEM, the Medical Explorers Program, and volunteered at Good Samaritan Hospital. She is pursuing the Pre-Medical Track at New York University. She looks forward to sharing her passion for the life sciences via the Biology course at STEMEY.
"
                />
               
                <Card
                    imgURL={fiona}
                    name="Fiona Sun"
                    des="Fiona Sun is a rising senior at Leigh High School and percussionist at San Francisco Symphony Youth Orchestra. She is president of the Leigh Chamber Orchestra Club and officer of the California Scholarship Federation Leigh Charter. Fiona is an officer of the Biology Olympiad Club, and is involved in other STEM clubs including Physics and Chemistry. She is a dedicated percussionist, performing in venues globally, with over a decade of experience in violin and piano. Fiona is a Patient Services volunteer at Good Samaritan hospital, a National Honors Society member, and President of UChannel Chamber Music Foundation. Her hobbies include art and reading."
                    position="Biology & Physics Instructor"

                />
                
                <Card
                    name="Yulia Anashkina"
                    imgURL={yulia}
                    des="
Yulia Anashkina is a rising sophomore with a passion for STEM. She earned straight A’s throughout middle school and freshman year. Her interests in STEM led her to complete Harvard’s Fundamentals of Neuroscience, and one of BYU’s math courses. At school she also participates in clubs such as Design Thinking and Bring Change to Mind. Outside of academics Yulia is a figure skater who competes individually as well as in a team. Her team, San Francisco Ice Theater, recently traveled to France and earned a ranking as fifth in the world. She is also a member of the Peninsula Skating Club Junior Board which helps the skating community through volunteering, fundraising, as well as other events. 
"
                    position="Biology Instructor"

                />
                <Card
                    imgURL = {defaultInstructor}
                    position = "Biology Instructor"
                    name="Landon Battin"
                    des="

Landon, a Junior at Leigh High School, is passionate in varying medical and tech fields including Chemistry and Biology. He also enjoys taking charge and sharing his interests with others of the same interest. He is the LHS Class of 2022 Junior Class President, a LHS Superintendent Student Advisory Council Site Rep, and a member of National Honor Society. In addition to youth leadership positions, Landon has made endeavours in Varsity Track and Field and Captain of the Junior Varsity Soccer team. Outside of school, Landon works part-time at Holy Cross After-school Children’s Center as a Junior Aide. Landon looks to pursue Biochemistry or a Biotech field in the near future and is excited to share his leadership as a Chemistry and Biology STEMEY instructor.

"
                />
                <Card
                    imgURL = {aashvi}
                    position = "Biology Instructor"
                    name="Aashvi Wason"
                    des="
                    Aashvi, a rising junior at Leigh, is interested in the medical field, and is passionate about biology and chemistry. She enjoys taking classes outside of school in the STEM field that advance her knowledge in science and math. Aashvi is involved in Leadership at Leigh, and is the Junior class Secretary/Treasurer. She is also a member of both the National Honor Society and the California Scholarship Federation. Outside of school, Aashvi helps out at the public library, volunteers at Good Samaritan Hospital, and likes to dance at Capitol Dance Company. She’s very thrilled to work with everyone as a part of STEMEY for the next few months!
"
                />
                <Card
                    imgURL = {defaultInstructor}
                    position = "Biology Instructor"
                    name="Abby Fernandes"
                    
                />
                <Card
                    imgURL = {defaultInstructor}
                    position = "Biology Instructor"
                    name="Alexandra Guo"
                />
                 <Card
                    imgURL = {defaultInstructor}
                    position = "Biology Instructor"
                    name="Emma Whitehead"
                />
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des