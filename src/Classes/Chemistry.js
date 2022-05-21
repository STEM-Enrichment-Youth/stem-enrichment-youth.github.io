import React from "react";


export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Chemistry</h1>

            <div class="class-con sign-up">
                <div class="class-con-item">
                    <h2 class="h">Course Description</h2>
                    <p class="p-team" style={{marginBottom: "0"}}>
                    In this course, we will study the matter that makes up everything around us. We will study its properties, how it combines, how it changes, and how it interacts with surrounding matter. We will also learn about the physical laws governing these interactions, and how we can predict the results of these interactions. This course follows a high school Chemistry curriculum, and it is helpful to have a basic understanding of algebra.
                    </p>
                    {/* <Carousel /> */}
                    <div style={{ boxShadow: "0px 0px 10px black", padding: "0 15px" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 5-10</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Christian Kim</p>
                        <p><span class="class-des-p">Prerequisites: </span>None!</p>

                    </div>


                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>p2h7hvu</h2>
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
                            <p>Atoms</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Periodicity</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Stoichiometry</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Gasses</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Basic Thermochemistry</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Basic Equilibrium/Acids and Bases</p>
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
