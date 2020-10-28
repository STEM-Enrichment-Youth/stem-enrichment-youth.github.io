import React from "react";
import "./NewTeam.css";
import Navbar from "../Navbar.js";
import Card from "./TeamCard";
import defaultInstructor from "../icons/head-brains.png";
import faith from "./InstructorImages/faith.png";
import claire from "./InstructorImages/ClaireJin.png";
import maddy from "./InstructorImages/maddy.jpeg";
import briana from "./InstructorImages/briana.jpeg";
import catherine from "./InstructorImages/catherineZhou.jpeg";
// import matilda from "./InstructorImages/";
// import ridhima from "./InstructorImages/";
// import ruhani from "./InstructorImages/";
// import saara from "./InstructorImages/";
import yana from "./InstructorImages/yana.jpeg";
import yulia from "./InstructorImages/yulia.JPG";




export default function NewTeam() {
    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Events</h1>
            <div class="con">

                <Card
                    imgURL={faith}
                    name="Faith Han"
                    // position=""
                    des="Faith Han is a rising senior at Leigh High School. She is founder and president of the Team HBV chapter at Leigh that works with Stanford’s Asian Liver Center. She will be attending the Stanford Youth Leadership Conference this summer and is also a member of CSF and NHS. Faith volunteers at Good Samaritan Hospital, Salvation Army, and her church nursery. She has gone to Nepal for a medical internship and on several mission trips to Mexico. She has also completed the Springboard Exploratory Academy for medicine taught by Harvard and MIT professors. She is section leader, co-president and plays the flute in Sky Ensemble. She has also been a part of the school’s JV volleyball team for two years and was captain last year. In her free time she enjoys watching Netflix and spending time with friends. Faith is excited to work with fellow leaders to make sure STEMEY runs smoothly and teach hands-on applications of Biology."
                />

                <Card
                    imgURL={claire}
                    name="Claire Jin"
                    // position=""
                    des="Claire Jin is a rising senior at Leigh High School. She is president of the Science National Honor Society and officer of Leigh CSF, and she is also a member of SOS and National Art Honors Society. She is part of leadership and senior class vice president. She has tutored young students from working at Kumon Math and Reading and peer students at Leigh from National Honors Society Club. She has been volunteering at Good Samaritan Hospital working in patient services. She volunteers working with young kids doing art activities and translating English to Korean. She will be part of the Chemistry course."
                />

                <Card
                    imgURL={maddy}
                    name="Maddy Hoekstra"
                    // position=""
                    des="Maddy Hoekstra is currently a junior at Leigh High School. She is passionate about all things science, including chemistry and biology. Maddy is currently taking AP Chem, Intro to Kinesiology and AP Calc. She is the Founder and President of Toys for Shelter Animals, Vice President of Best Buddies and tTeasurer for Community Companions. Maddy is a member of the National Honor Society, California Scholarship Federation, National Honors Society, Link Crew, and Biomedical Engineering Society. Outside of school, she is passionate about field hockey, volunteering, swimming, tutoring and reading with kids. She also loves coaching children in both field hockey and swimming. She is on the Events Outreach team. Maddy is also planning on teaching Molecular Biology and Chemistry in STEMEY!"
                />

                <Card
                    imgURL={briana}
                    name="Briana Do"
                    // position=""
                    des="Briana Do is a senior at Leigh High School. She is a involved in various leadership and STEM groups including the Science National Honor Society, Leos, Link Crew, and is vice-president of BSA's Venturing Crew 719. She is fluent in english and vietnamese and has experience outside of school tutoring young kids in math and reading.Over the summer, she helped create the acitivites curriculumn for the biology class, created promotional materials for STEM World, and started a small buisness for her artwork. She is currently a part of the events team, helping teach the FCSN live classes, and is the design team co-lead."
                />

                <Card
                    imgURL={catherine}
                    name="Catherine Zhou"
                    // position=""
                    des="Catherine Zhou is a sophomore at Lynbrook. She’s an active member of many STEM-related clubs at her school, and she is an officer of Lynbrook Pre-Med Club. She has self-studied AP biology and chemistry, and has taken biochemistry, organic chemistry, and several other STEM courses online, as she enjoys conducting research in those fields. Additionally, she has placed at regional and state level in Science Olympiad for three years, and she’s an intermediate biology olympiad gold medalist. She is looking forward to leading the molecular biology class as well as being part of the anatomy and events outreach team this fall!"
                />

                <Card
                    imgURL={defaultInstructor}
                    name="Matilda Eriksson"
                    // position=""
                    des="Matilda Eriksson is a senior at Leigh High School. She is passionate about various STEM related subjects, currently focusing on mathematics, biology and physics. She has completed AP Physics 1 and is currently taking AP biology, Computer science, and AP calculus. She is also a part of California Scholarship Federation, Science National Honors Society and Link Crew. She loves working with kids and works as an assistant teacher for the Swedish School of Silicon Valley where she teaches kids Swedish. Matilda is on the Strategy team as well as the events team for STEMEY."
                />

                <Card
                    imgURL={defaultInstructor}
                    name="Ridhima Inukruti"
                    // position=""
                    des=""
                />

                <Card
                    imgURL={defaultInstructor}
                    name="Ruhani Chhabra"
                    // position=""
                    des="Ruhani Chhabra is an eight grader at Farmwell Station Middle School in Ashburn, Virginia and she is on the events and outreach team for Stem Enrichment Youth(Stemey). She also helped promote Stem World. Ruhani is very passionate about STEM, specifically coding, computers, and science and is enrolled in Stemey’s Coding Class. In School, she is a part of the Science Olympiad and Advanced Chamber Orchestra Club. Ruhani also qualified to go to Nationals for the National Science Bee, and was supposed to compete in July of 2020, but could not because of Covid-19. She is also a accomplished Violinist and has played Violin for 5+ years, and has participated in Solo and Ensemble 3 times and received the highest rank each time. Some of her leisure activities include: singing, dancing, drawing, and hanging out with family and friends. Ruhani is super excited to help Stemey grow and looks forward to working with everyone."
                />

                <Card
                    imgURL={defaultInstructor}
                    name="Saara Kharal"
                    // position=""
                    des="Saara Kharal is a senior at Leigh High School, and is a part of the events and outreach team for STEMEY. Within Leigh, she is a member of CSF and National Honors Society. She is also the president of the Model United Nations team, and Lean On Us Club. Saara founded her own non-profit in 2018 dedicated to raising awareness for cognitive diseases and is very passionate about STEM research in these fields. Outside of school, she tutors orphans through the Givelight Foundation, and serves as a certified speaker and youth ambassador with the Islamic Networks group."
                />

                <Card
                    imgURL={yana}
                    name="Yana Samoylova"
                    // position=""
                    des="Yana Samoylova is a senior at Leigh High School who is interested in STEM, education, and art. At school, she has taken AP Chemistry and AP Calculus, and is a member of CSF and NAHS. Outside of school, she works at Kumon and helps kids with reading and math as well as volunteers over Zoom. She runs a weekly educational podcast called Explained: Simply for which she manages research, promotion, and design. She’s done art for the past ten years and been in Leigh’s art program for the past three, taking AP Art and Art 4 this year. She is a Design Team co-lead, algebra instructor and a member of the events and outreach committee. She’s excited to be working with STEMEY!"
                />

                <Card
                    imgURL={yulia}
                    name="Yulia Anashkina"
                    // position=""
                    des="Yulia Anashkina is a sophomore at Leigh High School. She has a passion for STEM, especially Biology and Neuroscience. She has taken several online courses related to STEM including a neuroscience course from Harvard. Additionally, she is a competitive figure skater who competes individually as well as with SFIT, a team ranked top 5 internationally. She is very excited to be working with STEMEY! "
                />


            </div>
        </div>
    </div>
    )
}
// imgURL name des