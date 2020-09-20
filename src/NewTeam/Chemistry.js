import React from "react";
import "./NewTeam.css";
import Navbar from "../Navbar.js";
import Card from "./TeamCard";
import christian from "./InstructorImages/christian.png";
import alex from "./InstructorImages/alex.JPG";
import casey from "./InstructorImages/casey.jpg";
import deven from "./InstructorImages/deven.png";
import catherine from "./InstructorImages/catherine.jpeg";
import defaultInstructor from "../icons/head-brains.png";
import daniel from "./InstructorImages/daniel.png";
import sarah from "./InstructorImages/SarahChang.png";
import amy from "./InstructorImages/AmyNam.png";
import claire from "./InstructorImages/ClaireJin.png";
import landon from "./InstructorImages/LandonBattin.jpg"; 

export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar />
        <div class="new-team">
            <h1>Meet Our Team</h1>
            <div class="con">

                <Card
                    name="Christian Kim"
                    imgURL={christian}
                    des="
Christian was the Leigh High School Biology and Chemistry Olympiad Club Vice President this year and will be Chemistry Olympiad President the upcoming school year. He has been a member of Leigh’s Science Olympiad for 3 years and is a founding member of Leigh’s Science Bowl team. He has experience teaching as an Eagle Scout instructor and tutoring in Leigh’s National Honors Society and outside of school. 
"
                    position="Chemistry Class Director"
                />
                <Card
                    name="Daniel Lee"
                    imgURL={daniel}
                    des="

                    Daniel Lee is a rising senior at Leigh High School. He has been a member of Leigh’s Science Olympiad, Math Club, California Scholarship Federation, National Honors Society for 3 years and is the founder of Leigh Science Bowl Team. He has also been the captain of Leigh’s School Varsity Golf team for the  itlast 2 years. He has won several awards including AIME, President’s Volunteer Service Award, Silicon Valley Korean Unification Competition Silver Medal. He has tutoring experience through volunteering at Silicon Valley Korean School. He is currently studying Multivariable Calculus in Mission College. 
"
                    position="Chemistry Lead Instructor"
                />

                <Card
                    name="Deven Shah"
                    imgURL={deven}
                    des="

                    Deven is a rising junior at The Harker School. His first experience with chemistry came through his passion studying the brain, where he learned about electrochemical gradients and ionic radius trends in order to understand how neurons fire. Last year, he took Honors Chemistry, losing two points total throughout the entire course. As a result, he self-studied the AP Chemistry test, filling in the gaps in his knowledge. 
"
                    position="Chemistry Lead Instructor"
                />
                <Card
                    name="Casey Lin"
                    imgURL={casey}
                    position="Chemistry Instructor"
                    des="
Casey Lin, a rising junior at Leigh High School, is a member of the National Honors Society and the California Scholarship Federation. Additionally, she is the secretary of the Leigh High School Biomedical Engineering Society. Involved in field hockey at Leigh, she was the JV team captain this past year and was part of the varsity team at the end of the season. She is a field hockey coach and referee, coaching in a youth league, and at Union Middle School. She’s competed in the Berkeley Biomedical High School Competition twice, and has won second overall and first in the video category freshman year. She looks forward to working in both chemistry and math in STEMEY. 
"
                />
                <Card
                    name="Kaeshav Mandyam"
                    imgURL={defaultInstructor}
                    position="Chemistry Lead Instructor"
                    des="
Kaeshav is a rising senior at Leigh High School. He has tutoring experience from two years of working at Kumon Math and Reading Center, as well as from volunteering as an instructor at Price Middle School’s math club. He is also a member of Leigh High School’s varsity volleyball team. He looks forward to instructing both chemistry and math classes.
"
                />
                <Card
                    name="Sarah Chang"
                    imgURL={sarah}
                    position="Chemistry Lead Instructor"
                    des="Sarah Chang is a rising senior at Leigh High School. She is a tutor for National Honor Society and a Link Crew Leader. She also participates in clubs, including Vitas Memory Bears, Help for Her, and Tri-M Music Honor Society. She also plays violin for the California Youth Symphony Senior Orchestra. She has taken the Chemistry Honors and AP Chemistry courses at Leigh, and is looking to pass on her knowledge to new students."
                />

                <Card
                    name="Amy Nam"
                    imgURL={amy}
                    position="Chemistry Instructor"
                    des="
Amy is a rising senior at Leigh HIgh School She is a member of the California Scholarship Federation and National Honors Society. She also plays clarinet in the Leigh Wind Ensemble and San Jose Youth Symphony and has performed in the California All-State Honor Band and various charity orchestras. She has tutoring experience from NHS tutoring and volunteering as a teacher assistant at the Holy Korean Martyrs Catholic Church Korean School. She is excited to be teaching chemistry at STEMEY!
"
                />


                <Card
                    name="Claire Jin"
                    des="
Claire Jin is a rising senior at Leigh High School. She is president of the Science National Honor Society and officer of Leigh CSF, and also a member of SOS and National Art Honors Society. She is part of leadership and is the senior class vice president. She has tutored young students from working at Kumon Math and Reading and peer students at Leigh from National Honors Society Club. She has been volunteering at Good Samaritan Hospital working in patient services. She volunteers working with young kids doing art activities and translating English to Korean. She will be part of the Chemistry course.
"
                    position="Chemistry Instructor"
                    imgURL={claire}

                />
                <Card
                    name="Landon Battin"
                    des="

                    Landon, a Junior at Leigh High School, is passionate in varying medical and tech fields including Chemistry and Biology. He also enjoys taking charge and sharing his interests with others of the same interest. He is the LHS Class of 2022 Junior Class President, a LHS Superintendent Student Advisory Council Site Rep, and a member of National Honor Society. In addition to youth leadership positions, Landon has made endeavours in Varsity Track and Field and Captain of the Junior Varsity Soccer team. Outside of school, Landon works part-time at Holy Cross After-school Children’s Center as a Junior Aide. Landon looks to pursue Biochemistry or a Biotech field in the near future and is excited to share his leadership as a Chemistry and Biology STEMEY instructor.
"
                    position="Chemistry Instructor"
                    imgURL={landon}

                />
                <Card
                    name="Catherine Luu"
                    des="
Catherine Luu is a rising junior at Leigh High School. She is a member of the National Honors Society and is a future officer of Seoul to San Jose. Since her middle school days, she has been a peer tutor for her fellow classmates. She is also a member of the Leigh High School’s swimming team. Outside of the school campus, she volunteers at King’s Martial Arts Academy as a second degree assistant instructor and is aiming for her third degree. She also swims competitively for South Valley Stingrays and Santa Teresa Sea Otters where she has worked in leadership positions. She will be working on the math and chemistry courses at STEMEY.
"
                    position="Chemistry Instructor"
                    imgURL={catherine}
                />

                <Card
                    name="Alex Choi"
                    des="

                    Alex is a rising senior at Leigh High School. He is interested in the fields of biochemistry, data science, and cognitive science. He volunteers at In Our Unity, where he has served a term as president, and at the Tech Interactive. He has teaching experience as a math instructor at Zion Youngnak Church, a peer tutor in the National Honors Society, and an employee at Kumon Math and Reading Center. He looks forward to teaching chemistry.
"
                    position="Chemistry Instructor"
                    imgURL={alex}
                />
            </div>
        </div>
    </div>
    )
}
// imgURL name des