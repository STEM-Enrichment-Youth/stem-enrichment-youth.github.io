import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 
import christian from "./christian.png"; 

export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team">
        <h1>Meet Our Team</h1>
        <div class="con">
                <div class="con-item">
                    <div class="con-img">
                        <img src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/diana_orig.jpg" />
                    </div>
                    <h2 class="h">Diana Poplacenel</h2>
                    <p class="p-team">
Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a founding member of Science Bowl and Science Olympiad, both of which are science based competitive clubs. She is a founder of the program and will need the neuroscience class. She has experience working with middle school students as an official employee for the Percussion Club at Union Middle School. She has completed Harvard’s three Fundamentals of Neuroscience courses as well as four of John Hopkins Bioinformatics courses through Coursera, all with A’s. For more information about Diana’s experience, you can visit her LinkedIn.  
</p>
                </div>
                <div class="con-item">
                    <div>
                        <img src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/img-8537_orig.jpg" />
                    </div>
                    <h2 class="h">Katherine Liu</h2>
                    <p class="p-team">Katherine Liu is the mathematics class instructor. She is also currently a junior and the co-president of Leigh’s Science National Honors Society and Physics Olympiad Club at Leigh High School. Katherine Liu is an official employee at Kumon, a tutoring center, so she also has experience working with elementary and middle school children. As officers of Science National Honors Society, Katherine and Diana have also organized and led STEM experiments at Carlton Elementary School. </p>
                </div>
                <div class="con-item">
                    <div class="con-img">
                        <img style={{height: "200px", width: "auto"}} src={christian}/>
                    </div>
                    <h2 class="h">Christian Kim</h2>
                    <p class="p-team">
Christian was the Leigh High School Biology and Chemistry Olympiad Club Vice President this year and will be Chemistry Olympiad President the upcoming school year. He has been a member of Leigh’s Science Olympiad for 3 years and is a founding member of Leigh’s Science Bowl team. He has experience teaching as an Eagle Scout instructor and tutoring in Leigh’s National Honors Society and outside of school. 
</p>
                </div>
                <div class="con-item">
                    <div class="con-img">
                        <img src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/img-8537_orig.jpg" />
                    </div>
                    <h2 class="h">Aniketh Prasad</h2>
                    <p class="p-team">Coming Soon</p>
                </div>
            </div>
        </div>
    </div>
    )
}