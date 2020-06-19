import React from "react";


export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Biology</h1>

            <div class="class-con sign-up">
                <div class="class-con-item">
                    <h2 class="h">Course Description</h2>
                    <p class="p-team" style={{marginBottom: "0"}}>
                    In this class, we will explore the biological mechanisms of life on earth. We will delve into the 
                    physiological inner workings of microscopic organisms, cellular components, animal organ systems, and plants. We will also provide
                    guidance for students eager to participate and study for the USA Biology Olympiad. </p>
                    <div style={{ boxShadow: "0px 0px 10px black", padding: "0 15px" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 6-10</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Aniketh Prasad</p>
                        <p><span class="class-des-p">Prerequisites: </span>None!</p>

                    </div>


                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>4qtekpr</h2>
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
                        <h2>Units</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>The Chemistry of Life</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>The Cell</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Genetics</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Plant Form and Function</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Animal Anatomy and Physiology</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Medical Applications of Biology</p>
                        </div>
                    </div>

                    <div class="sign-up-steps" style={{marginBottom: "0"}}>
                        <h2>What we provide</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Videos for each chapter</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Worksheets</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Quizzes</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Activities</p>
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
