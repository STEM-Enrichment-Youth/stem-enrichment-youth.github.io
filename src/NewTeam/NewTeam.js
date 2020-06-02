import React from "react"; 
import "./NewTeam.css"; 
import Navbar from "../Navbar.js"; 

export default function NewTeam() {
    return (<div class="new-team-con">
        <Navbar/> 
        <div class="new-team" style={{minHeight: "120vh"}}>
        <h1>Meet Our Team</h1>
        <div class="con">
                <div class="con-item">
                    <div class="img">
                        <img src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/diana_orig.jpg" />
                    </div>
                    <h2 class="h">Diana Poplacenel</h2>
                    <p class="pTeam">Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a member of two other science competition-based clubs. She is leading the biochemistry class. She has experience working with middle school students as an official employee for the Percussion Club at Union Middle School. </p>
                </div>
                <div class="con-item">
                    <div class="img">
                        <img src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/img-8537_orig.jpg" />
                    </div>
                    <h2 class="h">Katherine Liu</h2>
                    <p class="pTeam">Katherine Liu is the mathematics class instructor. She is also currently a junior and the co-president of Leigh’s Science National Honors Society and Physics Olympiad Club at Leigh High School. Katherine Liu is an official employee at Kumon, a tutoring center, so she also has experience working with elementary and middle school children. As officers of Science National Honors Society, Katherine and Diana have also organized and led STEM experiments at Carlton Elementary School. </p>
                </div>
                <div class="con-item">
                    <div class="img">
                        <img src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/diana_orig.jpg" />
                    </div>
                    <h2 class="h">Diana Poplacenel</h2>
                    <p class="pTeam">Diana Poplacenel is the Biology and Chemistry Olympiad President at Leigh High School, as well as the treasurer of the Science National Honors Society and a member of two other science competition-based clubs. She is leading the biochemistry class. She has experience working with middle school students as an official employee for the Percussion Club at Union Middle School. </p>
                </div>
                <div class="con-item">
                    <div class="img">
                        <img src="https://stemenrichmentyouth.weebly.com/uploads/1/3/1/7/131772821/img-8537_orig.jpg" />
                    </div>
                    <h2 class="h">Katherine Liu</h2>
                    <p class="pTeam">Katherine Liu is the mathematics class instructor. She is also currently a junior and the co-president of Leigh’s Science National Honors Society and Physics Olympiad Club at Leigh High School. Katherine Liu is an official employee at Kumon, a tutoring center, so she also has experience working with elementary and middle school children. As officers of Science National Honors Society, Katherine and Diana have also organized and led STEM experiments at Carlton Elementary School. </p>
                </div>
            </div>
        </div>
    </div>
    )
}