import React from "react";


export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Programming</h1>



            <div class="class-con sign-up">
                <div class="class-con-item">
                    <h2 class="h">Intro to Computer Science</h2>
                    <p class="p-team" style={{ marginBottom: "0" }}>
                        CURRENTLY OFFERED ONLY FOR CONNECT RWC STUDENTS. In this course we will be covering the basics of coding through learning java and going through the AP Computer Science course. By the end of the course students will know the main concepts of coding which will help in learning any language moving forward.
                    </p>
                    {/* <Carousel /> */}
                    <div style={{ boxShadow: "0px 0px 10px black", padding: "0 15px" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 6-10</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Aryan Mathur</p>
                        <p><span class="class-des-p">Prerequisites: </span>Pre-algebra</p>

                    </div>


                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>ps665uc</h2>
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
                <div class="class-con-item" style={{ gridTemplateRows: "repeat(2, auto)" }}>
                    <div class="sign-up-steps" style={{ marginBottom: "0" }}>
                        <h2>Units</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Primitive Types</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Using Objects</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Boolean Expressions and If Statements</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Iteration</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Classes</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Arrays</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Inheritance</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Recursion</p>
                        </div>

                    </div>

                    <div class="sign-up-steps" style={{ marginBottom: "0" }}>
                        <h2>What we provide</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Video lectures for each chapter</p>
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
