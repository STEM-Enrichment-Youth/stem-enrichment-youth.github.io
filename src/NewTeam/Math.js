import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import Card from "./TeamCard"; 
import yana from "./InstructorImages/yana.jpeg"; 
import emily from "./InstructorImages/emily.jpg"; 
import katherine from "./InstructorImages/katherine.jpg"; 
import justin from "./InstructorImages/justin.jpg"; 
import catherine from "./InstructorImages/catherine.jpeg"; 
import daniel from "./InstructorImages/daniel.png"; 
import casey from "./InstructorImages/casey.jpg"; 
import arjun from "./InstructorImages/arjun.jpeg"; 
import avery from "./InstructorImages/avery.jpeg";
import srishti from "./InstructorImages/srishti.jpeg";

export default function NewTeam() {
    return (<div class="new-team-con"> 
        <div class="new-team">
        <h1>Math</h1>
        <div class="con">
                <Card
                    imgURL={katherine}
                    name="Katherine Liu"
                    des="

                    Katherine Liu is a rising senior at Leigh High School, and she is an officer in Leigh’s Math Club, Physics Olympiad Club, and Science National Honor Society Club. She has tutoring experience through her job at the Kumon Math and Reading Center as well as through volunteering at Friends of Children with Special Needs and with Leigh’s National Honors Society. She has participated in math competitions since middle school, and she is an AIME Qualifier, scoring a 9 on the AIME this year. Her other activities include competitive dance and drawing, which she has won several awards and achievements in.
"   
                    position="Competition Math Class Lead" 
                />
               
                <Card
                    name="Justin Liu"
                    imgURL={justin}
                    des="
                    Justin Liu is a rising senior at Leigh High School. He is an officer of the Science National Honors Society and co-president of the Physics Olympiad. He is a member of National Honors Society and California Scholarship Federation, Link Crew, and he is also a peer tutor at Leigh. He got a 36 on the ACT. Outside of school, he volunteers at Friends of Children with Special Needs and works at Kumon. He is fluent in Mandarin and English. He plays the bassoon, clarinet, and piano. Also, Justin does fencing competitively and is the alternate for the 2020 USA National Team while also part of the mentor program on his club team. He is looking forward to teaching Math at STEMEY."
                    position="Algebra/Geometry Class Lead"
                />
                <Card
                    name = "Srishti Venkatesan"
                    imgURL = {srishti}
                    des = "Srishti Venkatesan is a freshman at Leigh High School. She is passionate about all things STEM, but especially loves the fields of mathematics and biology. As someone who appreciates community engagement, Srishti actively volunteers in her neighborhood by tutoring and helping out in any way she can. Aside from STEMEY, she is part of her high school’s leadership class, serves as a student representative for the Bay Area Youth Society for Neuroscience, and is a member of several STEM clubs at Leigh. In her free time, she loves to dance, play the trumpet, and travel. In STEMEY, she is part of the math team, specifically an algebra instructor, and she is super exited for this upcoming year!"
                    position = "Algebra Class Instructor"

                /> 
                <Card
                    imgURL = {yana}
                    name="Yana Samoylova"
                    des= "Yana Samoylova is a senior at Leigh High School who is interested in STEM, education, and art. At school, she has taken AP Chemistry and AP Calculus, and is a member of CSF and NAHS. Outside of school, she works at Kumon and helps kids with reading and math as well as volunteers over Zoom. She runs a weekly educational podcast called Explained: Simply for which she manages research, promotion, and design. She’s done art for the past ten years and been in Leigh’s art program for the past three, taking AP Art and Art 4 this year. She is a Design Team co-lead, algebra instructor and a member of the events and outreach committee. She’s excited to be working with STEMEY!"
                    position="Algebra Class Instructor"

                />
                 <Card
                    imgURL = {emily}
                    name="Emily Agur"
                    des="Emily Agur is a rising senior at Leigh High School. She is a co-founder and officer in Leigh's Science National Honor Society Club. She has tutoring experience through National Honor Society Club at leigh. She also volunteers at local events through the California Scholarship Federation at Leigh. At school she is also a part of sideline cheerleading,as well as competitive cheerleading where they took home 1st place at CCS championships and 3rd place at USA nationals. She is a devoted pianist and has been playing since she was 5 years old. She is also fluent in Chinese and English and has been studying Spanish for 4 years. She will be a part of the Mathematics 2 course. "
                    position="Algebra Class Instructor & FCSN Math Class Lead"

                />
                <Card
                    name="Catherine Luu"
                    des="
                    Catherine Luu is a junior at Leigh High School. She is a member of the National Honors Society and is the vice president of Seoul to San Jose. Since her middle school days, she has been a peer tutor for her fellow classmates. She is also a member of the Leigh High School’s swimming team. Outside of the school campus, she volunteers at King’s Martial Arts Academy as a third degree instructor. She also swims competitively for South Valley Stingrays and Santa Teresa Sea Otters where she has worked in leadership positions. Over the summer, she taught math and chemistry classes at STEMEY. Currently, she is an instructor of the algebra class."
                    position="Algebra Class Instructor"
                    imgURL= {catherine}
                />
                <Card 
                name="Arjun Ranade"
                des="
                Arjun Ranade is currently a junior at Leigh High School. He is very passionate about STEM and wishes to pursue either Mechanical or Electrical Engineering in the future. He is currently taking AP Physics 1, AP Calculus AB, and AP English Language Composition. He was part of STEMEY over the summer and helped teach the Math Innovation Course. He was also one of the people that brought in the most participants into STEM World! He loves to work with younger students and was volunteering at the Almaden Library regularly to help teach kids strategies on how to understand and analyze a text. He is also a competitive swimmer on the Leigh Swim Team and also swims for Alto Swim Club as a club swimmer. He also qualified for CCS the previous year but due to COVID he was not able to compete. "
                position="Algebra Class Instructor"
                imgURL={arjun}
                />
                 <Card 
                name="Avery Shaffer"
                des="
                Avery Shaffer is a junior at Leigh High School. She has a passion for Math and Science and aspires to have a career in the medical field. She is a member of multiple clubs at Leigh including Embrace Relief, which raises money for refugees, HeForShe club which helps fight against and raise awareness of gender inequalities, and SADD club which discusses the risk and pressures of everyday teenagers. Avery also played for Leigh's softball team and hopes to continue this year. She took English 2H as a sophmore, and is currently taking IM3 STEM and APLang as a junior. Outside of school, Avery is a mentor for the Keystone and Operation Purpose programs and for STEMEY, she helps teach the live algebra classes."
                position="Algebra Class Instructor"
                imgURL={avery}
                />
               
                <Card
                    name="Casey Lin"
                    imgURL={casey}
                    position="Geometry Class Instructor"
                    des="
                    Casey Lin is a junior at Leigh High School. She is a member of multiple groups including the National Honors Society, the California Scholarship Federation, Link Crew, and Keystone. She’s the secretary of the Leigh High School Biomedical Engineering Society. Casey and her team competed in, and won, the Berkeley Biomedical Engineering High School Competition. Casey is a field hockey coach and referee and hopes to continue playing at Leigh later in the year. She is now taking AP Physics 1, AP Calculus, and AP English Language and Composition. Over the summer, Casey taught both math and chemistry classes with STEMEY, and made chemistry activities. Moving forward, she is excited to be the Science Lead for the FCSN class, and to teach the FCSN math class and live geometry class. "
                />
                 <Card
                    name="Daniel Lee"
                    imgURL={daniel}
                    des="

                    Daniel Lee is a rising senior at Leigh HIgh School. He has been a member of Leigh’s Science Olympiad, Math Club, California Scholarship Federation, National Honors Society for 3 years and is the founder of Leigh Science Bowl Team. He has also been the captain of Leigh’s School Varsity Golf team for the last 2 years. He has won several awards including AIME, President’s Volunteer Service Award, Silicon Valley Korean Unification Competition Silver Medal. He has tutoring experience through volunteering at Silicon Valley Korean School. He is currently studying Multivariable Calculus in Mission College. 
"
                    position="Calculus Summer Class Lead"
                />
                
               
            </div>
        </div>
    </div>
    )
}
// imgURL name des