import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import fiona from "./InstructorImages/fiona.png"; 
import emily from "./InstructorImages/emily.jpg"; 
import katherine from "./InstructorImages/katherine.jpg"; 
import justin from "./InstructorImages/justin.jpg"; 
import catherine from "./InstructorImages/catherine.jpg"; 
import daniel from "./InstructorImages/daniel.png"; 
import defaultInstructor from "../icons/head-brains.png";
import natasha from "./InstructorImages/natasha.jpeg"; 
import aashvi from "./InstructorImages/aashvi.jpg"; 
import casey from "./InstructorImages/casey.jpg"; 
import claire from "./InstructorImages/claire.jpg"; 


export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <div class="con">
                <Card
                    imgURL={katherine}
                    name="Katherine Liu"
                    des="
Katherine Liu is a rising senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. Her other activities include competition math, competitive dance, and drawing, which she has won several awards and achievements in.
"   
                    position="Competition Math Class Director" 
                />
                
            
                <Card
                    name="Daniel Lee"
                    imgURL={daniel}
                    des="

                    Daniel Lee is a rising senior at Leigh HIgh School. He has been a member of Leigh’s Science Olympiad, Math Club, California Scholarship Federation, National Honors Society for 3 years and is the founder of Leigh Science Bowl Team. He has also been the captain of Leigh’s School Varsity Golf team for the last 2 years. He has won several awards including AIME, President’s Volunteer Service Award, Silicon Valley Korean Unification Competition Silver Medal. He has tutoring experience through volunteering at Silicon Valley Korean School. He is currently studying Multivariable Calculus in Mission College. 
"
                    position="Calculus Class Director"
                />
                <Card
                    name="Justin Liu"
                    imgURL={justin}
                    des="
                    Justin Liu is a rising senior at Leigh High School. He is an officer of the Science National Honors Society and co-president of the Physics Olympiad. He is a member of National Honors Society and California Scholarship Federation, and he is also a peer tutor at Leigh. Outside of school, he volunteers at Friends of Children with Special Needs. He is fluent in Mandarin and English. He plays the bassoon, clarinet, and piano. Also, Justin does fencing competitively and is the alternate for the 2020 USA National Team while also part of the mentor program on his club team. He is looking forward to teaching Math at STEMEY.
"
                    position="Algebra/Geometry Class Director"
                />
                 <Card
                    imgURL = {emily}
                    name="Emily Agur"
                    des="Emily Agur is a rising senior at Leigh High School. She is a co-founder and officer in Leigh's Science National Honor Society Club. She has tutoring experience through National Honor Society Club at leigh. She also volunteers at local events through the California Scholarship Federation at Leigh. At school she is also a part of sideline cheerleading,as well as competitive cheerleading where they took home 1st place at CCS championships and 3rd place at USA nationals. She is a devoted pianist and has been playing since she was 5 years old. She is also fluent in Chinese and English and has been studying Spanish for 4 years. She will be a part of the Mathematics 2 course. "
                    position="Algebra/Geometry Instructor"

                />
                <Card
                    name="Catherine Luu"
                    des="
Catherine Luu is a rising junior at Leigh High School. She is a member of the National Honors Society and is a future officer of Seoul to San Jose. Since her middle school days, she has been a peer tutor for her fellow classmates. She is also a member of the Leigh High School’s swimming team. Outside of the school campus, she volunteers at King’s Martial Arts Academy as a second degree assistant instructor and is aiming for her third degree. She also swims competitively for South Valley Stingrays and Santa Teresa Sea Otters where she has worked in leadership positions. She will be working on the math and chemistry courses at STEMEY.
"
                    position="Algebra/Geometry Instructor"
                    imgURL= {catherine}
                />
                <Card
                name="Claire Jin"
                    des="
Claire Jin is a rising senior at Leigh High School. She is president of the Science National Honor Society and officer of Leigh CSF, and she is also a member of SOS and National Art Honors Society. She is part of leadership and senior class vice president. She has tutored young students from working at Kumon Math and Reading and peer students at Leigh from National Honors Society Club. She has been volunteering at Good Samaritan Hospital working in patient services. She volunteers working with young kids doing art activities and translating English to Korean. She will be part of the Chemistry course.
"
                    position="Algebra/Geometry Instructor"
                    imgURL = {defaultInstructor}
                />
                <Card 
                    name="Kaeshav Mandyam"
                    position = "Calculus Instructor"
                    imgURL = {defaultInstructor}
                    des="
Kaeshav is a rising senior at Leigh High School. He has tutoring experience from two years of working at Kumon Math and Reading Center, as well as from volunteering as an instructor at Price Middle School’s math club. He is also a member of Leigh High School’s varsity volleyball team. He looks forward to instructing both chemistry and math classes.
"
                /> 
                 <Card
                    imgURL={fiona}
                    name="Fiona Sun"
                    des="Fiona Sun is a rising senior at Leigh High School and percussionist at San Francisco Symphony Youth Orchestra. She is president of the Leigh Chamber Orchestra Club and officer of the California Scholarship Federation Leigh Charter. Fiona is an officer of the Biology Olympiad Club, and is involved in other STEM clubs including Physics and Chemistry. She is a dedicated percussionist, performing in venues globally, with over a decade of experience in violin and piano. Fiona is a Patient Services volunteer at Good Samaritan hospital, a National Honors Society member, and President of UChannel Chamber Music Foundation. Her hobbies include art and reading."
                    position="Calculus Instructor"

                />
                <Card
                    imgURL = {aashvi}
                    position = "Algebra/Geometry Instructor"
                    name="Aashvi Wason"
                    des="
                    Aashvi, a rising junior at Leigh, is interested in the medical field, and is passionate about biology and chemistry. She enjoys taking classes outside of school in the STEM field that advance her knowledge in science and math. Aashvi is involved in Leadership at Leigh, and is the Junior class Secretary/Treasurer. She is also a member of both the National Honor Society and the California Scholarship Federation. Outside of school, Aashvi helps out at the public library, volunteers at Good Samaritan Hospital, and likes to dance at Capitol Dance Company. She’s very thrilled to work with everyone as a part of STEMEY for the next few months!
"
                />
                <Card
                    imgURL = {defaultInstructor}
                    position = "Algebra/Geometry Instructor"
                    name="Abby Fernandes"
                    
                />
                <Card
                    name="Casey Lin"
                    imgURL={casey}
                    position="Algebra/Geometry Instructor"
                    des="
Casey Lin, a rising junior at Leigh High School, is a member of the National Honors Society and the California Scholarship Federation. Additionally, she is the secretary of the Leigh High School Biomedical Engineering Society. Involved in field hockey at Leigh, she was the JV team captain this past year and was part of the varsity team at the end of the season. She is a field hockey coach and referee, coaching in a youth league, and at Union Middle School. She’s competed in the Berkeley Biomedical High School Competition twice, and has won second overall and first in the video category freshman year. She looks forward to working in both chemistry and math in STEMEY. 
"
                />
                <Card
                    name="Catherine Luu"
                    des="
Catherine Luu is a rising junior at Leigh High School. She is a member of the National Honors Society and is a future officer of Seoul to San Jose. Since her middle school days, she has been a peer tutor for her fellow classmates. She is also a member of the Leigh High School’s swimming team. Outside of the school campus, she volunteers at King’s Martial Arts Academy as a second degree assistant instructor and is aiming for her third degree. She also swims competitively for South Valley Stingrays and Santa Teresa Sea Otters where she has worked in leadership positions. She will be working on the math and chemistry courses at STEMEY.
"
                    position="Algebra/Geometry Instructor"
                    imgURL={catherine}
                />
                <Card 
                    name="Claire Kwon"
                    des = " 
Claire Kwon is a rising sophomore at Leigh High School who is a part of the STEMEY instructors this year. She is a youth volunteer for the Silicon Valley Korean School, where she helps students from pre-kindergarten to eighth grade with Korean. She is also the treasurer for Key Club and Tri-M Honor Society this coming school year. She has also taken part in the California All-State High School Symphony Orchestra and California Youth Symphony. She also has experience tutoring younger children from early elementary grades English and Science. She is a part of the Science National Honor Society and Science Olympiad. 
"
                    imgURL = {claire}
                    position = "Algebra/Geometry Instructor"
                /> 
                <Card 
                name="Natasha Li"
                des = "Natasha Li is a rising junior at Leigh High School with a passion for engineering. She is a member of Leigh’s Biomedical Engineering Society and Technical Theatre department, where she works as an audio tech. Outside of school, Natasha has participated in various programs, including the PixelHacks hackathon and the Tech Challenge at the Tech Museum Innovative, where her team won a Judge’s Choice Award for building a hovercraft prototype. She has also attended the Mineta Summer Transportation Institute and the National Flight Academy on scholarships to learn more about the environmental impact of transportation and how to better engineer vehicles that mitigate those effects. "
                position = "Algebra/Geometry Instructor"
                imgURL = {natasha}
                /> 
                <Card
                name="Vaibhav Shukla"
                des = "Vaibhav is a rising sophomore at Leigh. He’s self-learned programming since middle school, and does it for fun, along with playing the piano.  Math, however, led him to score as the highest individual scorer in his school for Mathcounts. He also participated and represented his school in the SCVMA Math Field Day (The LeapFrog Competition) with his partner and won 7th place."
                position="Algebra/Geometry Instructor"
                imgURL = {defaultInstructor}
                /> 
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des