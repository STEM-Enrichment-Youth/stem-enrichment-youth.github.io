import React from "react";


export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Neuroscience</h1>
            <h3 class="team-subtitle">STEMEY's Neuroscience class is created by The NeuroKidz and Bay Area Society for Neuroscience Youth.</h3>

            <div class="class-con sign-up">
                <div class="class-con-item">
                    <h2 class="h">Course Description</h2>
                    <p class="p-team">
                    In this course, we will explore the inner workings of the brain and central nervous system. We will thoroughly consider the different parts of the brain and learn how and why neurological disorders occur.
                    </p>
                    <div style={{ boxShadow: "0px 0px 10px black", padding: "0 15px" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 5-10</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Diana Poplacenel</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Nethra Srinivasan</p>
                        <p><span class="class-des-p">Prerequisites: </span>None!</p>

                    </div>


                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>xaypnt4</h2>
                    <button class="btn btn-danger">
                        <a href="https://classroom.google.com/u/0/h" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            SIGN UP
                        </a>
                    </button>

                </div>
                <div class="class-con-item" style={{gridTemplateRows: "repeat(2, auto)"}}>
                    <div class="sign-up-steps" style={{marginBottom: "0"}}>
                        <h2>Concepts Covered</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Basics of the Brain</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Senses and Perception</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Movement</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Learning</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Emotion and Memory</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Neurological Disorders</p>
                        </div>
                    </div>

                    <div class="sign-up-steps" style={{marginBottom: "0"}}>
                        <h2>What we provide</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Video lectures</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Worksheets & Quizzes</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Repositories of Online Resources</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Online Tutoring</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
    )
}
