import React from "react";


export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Physics</h1>

            <div class="class-con sign-up">
                <div class="class-con-item">
                    <h2 class="h">Course Description</h2>
                    <p class="p-team" style={{marginBottom: "0"}}>
                    In this course, we will study the basics of Newtonian mechanics, and develop some of the mindset needed to approach Physics problems. This course approximately follows the first ~2/3 of AP Physics 1 and requires some basic [math] skills, including Algebra, basic Geometry, Trigonometry, and a willingness to learn.</p>
                    {/* <Carousel /> */}
                    <div style={{ boxShadow: "0px 0px 10px black", padding: "0 15px" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 5-10</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Karan Gurazada</p>
                        <p><span class="class-des-p">Prerequisites: </span>Algebra, Geometry, Trigonometry</p>

                    </div>


                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>dekgelg</h2>
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
                            <p>Kinematics</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Statics</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Dynamics</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Oscillations</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Conservation Laws</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Collisions</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Rotations</p>
                        </div>
                    </div>

                    <div class="sign-up-steps" style={{marginBottom: "0"}}>
                        <h2>What we provide</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Video lectures for each chapter</p>
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
