import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import christian from "./InstructorImages/christian.png"; 
import fiona from "./InstructorImages/fiona.png"; 
import emily from "./InstructorImages/emily.jpg"; 
import katherine from "./InstructorImages/katherine.jpg"; 
import justin from "./InstructorImages/justin.jpg"; 
import aryan from "./InstructorImages/aryan.JPG"; 
import yulia from "./InstructorImages/yulia.JPG"; 
import daniel from "./InstructorImages/daniel.png"; 


export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <div class="con">
                <Card
                    imgURL="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/diana_orig.jpg"
                    name="Diana Poplacenel"
                    des="Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a founding member of Science Bowl and Science Olympiad, both of which are science based competitive clubs. She is a founder of the program and will need the neuroscience class. She has experience working with middle school students as an official employee for the Percussion Club at Union Middle School. She has completed Harvard’s three Fundamentals of Neuroscience courses as well as four of John Hopkins Bioinformatics courses through Coursera, all with A’s. For more information about Diana’s experience, you can visit her LinkedIn.  "
                />
                <Card
                    imgURL={katherine}
                    name="Katherine Liu"
                    des="
Katherine Liu is a rising senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. Her other activities include competition math, competitive dance, and drawing, which she has won several awards and achievements in.
"
                />
                <Card
                    name="Christian Kim"
                    imgURL={christian}
                    des="
Christian was the Leigh High School Biology and Chemistry Olympiad Club Vice President this year and will be Chemistry Olympiad President the upcoming school year. He has been a member of Leigh’s Science Olympiad for 3 years and is a founding member of Leigh’s Science Bowl team. He has experience teaching as an Eagle Scout instructor and tutoring in Leigh’s National Honors Society and outside of school. 
"
                />

                <Card
                    imgURL={fiona}
                    name="Fiona Sun"
                    des="Fiona Sun is a rising senior at Leigh High School and percussionist at San Francisco Symphony Youth Orchestra. She is president of the Leigh Chamber Orchestra Club and officer of the California Scholarship Federation Leigh Charter. Fiona is an officer of the Biology Olympiad Club, and is involved in other STEM clubs including Physics and Chemistry. She is a dedicated percussionist, performing in venues globally, with over a decade of experience in violin and piano. Fiona is a Patient Services volunteer at Good Samaritan hospital, a National Honors Society member, and President of UChannel Chamber Music Foundation. Her hobbies include art and reading."
                />
                
                <Card
                    imgURL = {emily}
                    name="Emily Agur"
                    des="Emily Agur is a rising senior at Leigh High School. She is a co-founder and officer in Leigh's Science National Honor Society Club. She has tutoring experience through National Honor Society Club at leigh. She also volunteers at local events through the California Scholarship Federation at Leigh. At school she is also a part of sideline cheerleading,as well as competitive cheerleading where they took home 1st place at CCS championships and 3rd place at USA nationals. She is a devoted pianist and has been playing since she was 5 years old. She is also fluent in Chinese and English and has been studying Spanish for 4 years. She will be a part of the Mathematics 2 course. "
                />
                <Card
                imgURL={aryan}
                name="Aryan Mathur"
                des="
                Aryan Mathur is a rising senior at Leigh High School. He is the founder of Debate Club and the Vice President of AI and USACO club. He is a coding enthusiast who has experience in Java and Javascript and is currently a USACO silver. He has had teaching experience volunteering for the First Tee of Silicon Valley to teach young kids golf. He has also been the captain of the Leigh High School Varsity Golf team for the last two years and has earned multiple awards in league competitions as well as outside competitions. He will be leading the coding course that will be offered at STEMEY, and is looking forward to working on this amazing volunteering opportunity. 
"
                />
                <Card
                    name="Yulia Anashkina"
                    imgURL={yulia}
                    des="
Yulia Anashkina is a rising sophomore with a passion for STEM. She earned straight A’s throughout middle school and freshman year. Her interests in STEM led her to complete Harvard’s Fundamentals of Neuroscience, and one of BYU’s math courses. At school she also participates in clubs such as Design Thinking and Bring Change to Mind. Outside of academics Yulia is a figure skater who competes individually as well as in a team. Her team, San Francisco Ice Theater, recently traveled to France and earned a ranking as fifth in the world. She is also a member of the Peninsula Skating Club Junior Board which helps the skating community through volunteering, fundraising, as well as other events. 
"
                />
                <Card
                    name="Daniel Lee"
                    imgURL={daniel}
                    des="

                    Daniel Lee is a rising senior at Leigh HIgh School. He has been a member of Leigh’s Science Olympiad, Math Club, California Scholarship Federation, National Honors Society for 3 years and is the founder of Leigh Science Bowl Team. He has also been the captain of Leigh’s School Varsity Golf team for the last 2 years. He has won several awards including AIME, President’s Volunteer Service Award, Silicon Valley Korean Unification Competition Silver Medal. He has tutoring experience through volunteering at Silicon Valley Korean School. He is currently studying Multivariable Calculus in Mission College. 
"
                />
                <Card
                    name="Justin Liu"
                    imgURL={justin}
                    des="
                    Justin Liu is a rising senior at Leigh High School. He is an officer of the Science National Honors Society and co-president of the Physics Olympiad. He is a member of National Honors Society and California Scholarship Federation, and he is also a peer tutor at Leigh. Outside of school, he volunteers at Friends of Children with Special Needs. He is fluent in Mandarin and English. He plays the bassoon, clarinet, and piano. Also, Justin does fencing competitively and is the alternate for the 2020 USA National Team while also part of the mentor program on his club team. He is looking forward to teaching Math at STEMEY.
"
                />
                <Card
                    name="Catherine Luu"
                    des="
Catherine Luu is a rising junior at Leigh High School. She is a member of the National Honors Society and is a future officer of Seoul to San Jose. Since her middle school days, she has been a peer tutor for her fellow classmates. She is also a member of the Leigh High School’s swimming team. Outside of the school campus, she volunteers at King’s Martial Arts Academy as a second degree assistant instructor and is aiming for her third degree. She also swims competitively for South Valley Stingrays and Santa Teresa Sea Otters where she has worked in leadership positions. She will be working on the math and chemistry courses at STEMEY.
"
                />
                <Card
                name="Claire Jin"
                    des="
Claire Jin is a rising senior at Leigh High School. She is president of the Science National Honor Society and officer of Leigh CSF, and she is also a member of SOS and National Art Honors Society. She is part of leadership and senior class vice president. She has tutored young students from working at Kumon Math and Reading and peer students at Leigh from National Honors Society Club. She has been volunteering at Good Samaritan Hospital working in patient services. She volunteers working with young kids doing art activities and translating English to Korean. She will be part of the Chemistry course.
"
                />
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des