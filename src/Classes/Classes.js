import React from "react";
import { Helmet } from "react-helmet";
import "./NewClasses.css"
import molbio from "./ClassPics/MolBio.png"
import anatomy from "./ClassPics/Anatomy.png"
import geometry from "./ClassPics/Geometry.png"
import algebra from "./ClassPics/Algebra.png"
import settheory from "./ClassPics/SetTheory.png"
import physics from "./ClassPics/Physics.png"

export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Classes</h1>

            <div class="class-con sign-up">

                <div id="molecular-bio" class="class-con-item">
                    <img class="class-img" src={molbio} />
                    {/* <h2 class="h">Molecular Biology</h2> */}
                    <p class="class-des" style={{ marginBottom: "0" }}>


                        Join the molecular biology class to explore the fascinating roles that molecules play in biology! In this class, you will gain an understanding of biological molecules, cellular and metabolic processes, genetics, gene expression, and current advances in this field.
                    </p>
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Intended Ages: </span>11 yrs old + </p>
                        <p><span class="class-des-p">Lead Instructor: </span>Yulia Anashkina</p>
                        <p><span class="class-des-p">Prerequisites: </span>None</p>
                        <p><span class="class-des-p">Time: </span>11 AM - 12 PM PDT Every Saturday</p>

                    </div>
                    <button class="btn btn-fb">
                        <a href="/biology" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            See Our Team
                        </a>
                    </button>
                    <button class="btn btn-danger">
                        <a href="https://tinyurl.com/joinstemeymolbio" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Register Now
                        </a>
                    </button>

                </div>
                <div id="anatomy" class="class-con-item">
                    <img class="class-img" src={anatomy} />
                    {/* <h2 class="h">Anatomy</h2> */}
                    <p class="class-des" style={{ marginBottom: "0" }}>


                        Join us to explore the wonders of the human body. You’ll be exploring everything from the intricacies of the body systems, to how all these parts connect to help our body function! </p>
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Intended Ages: </span>11 years old +</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Arushi Singhal & Priyanka Kalidindi</p>
                        <p><span class="class-des-p">Prerequisites: </span>None</p>
                        <p><span class="class-des-p">Time: </span>2-3 PM PDT Every Sunday</p>
                    </div>

                    <button class="btn btn-fb">
                        <a href="/biology" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            See Our Team
                        </a>
                    </button>
                    <button class="btn btn-danger">
                        <a href="https://tinyurl.com/joinstemeyanatomy" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Register Now                        </a>
                    </button>

                </div>
                <div id="geometry" class="class-con-item">
                    <img class="class-img" src={geometry} />
                    {/* <h2 class="h">Geometry</h2> */}
                    <p class="class-des" style={{ marginBottom: "0" }}>

                        Join our introductory course to learn the fundamentals of geometry! We will cover proofs and various problem solving skills, and we will look at applications of geometry in competition math problems.
                    </p> {/* <Carousel /> */}
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 5-10</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Justin Liu</p>
                        <p><span class="class-des-p">Prerequisites: </span>Prealgebra</p>
                        <p><span class="class-des-p">Time: </span>10-11 AM PDT Every Sunday</p>

                    </div>
                    <button class="btn btn-fb">
                        <a href="/math" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            See Our Team
                        </a>
                    </button>
                    <button class="btn btn-danger">
                        <a href="https://tinyurl.com/joinstemeygeo" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Register Now
                        </a>
                    </button>

                </div>
                <div id="algebra" class="class-con-item">
                    <img class="class-img" src={algebra} />
                    {/* <h2 class="h">Algebra</h2> */}
                    <p class="class-des" style={{ marginBottom: "0" }}>


                        Join our introductory course to learn the basics of algebra 1! We will cover ways to solve different kinds of equations, and we will look at applications of algebra in competition math problems.</p> {/* <Carousel /> */}
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 5-10</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Justin Liu</p>
                        <p><span class="class-des-p">Prerequisites: </span>Prealgebra</p>
                        <p><span class="class-des-p">Time: </span>11 AM - 12PM PDT Every Sunday</p>

                    </div>

                    <button class="btn btn-fb">
                        <a href="/math" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            See Our Team
                        </a>
                    </button>
                    <button class="btn btn-danger">
                        <a href="https://tinyurl.com/joinstemeyalgebra" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Register Now                        </a>
                    </button>

                </div>

            </div>
            <div class="class-con sign-up">
                <div id="physics" class="class-con-item">
                    <img class="class-img" src={physics} />
                    <p class="class-des" style={{ marginBottom: "0" }}>
                        In this course, we will study the basics of Newtonian mechanics, and develop some of the mindset needed to approach Physics problems. This course approximately follows the first ~2/3 of AP Physics 1 and requires some basic [math] skills, including Algebra, basic Geometry, Trigonometry, and a willingness to learn.</p>
                    {/* <Carousel /> */}
                    <div style={{ boxShadow: "0px 0px 10px black", padding: "0 15px" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 5-12</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Tanvi Rao</p>
                        <p><span class="class-des-p">Prerequisites: </span>Algebra, Geometry, Trigonometry</p>
                        <p><span class="class-des-p">Time: </span>12-1 PM PDT Every Sunday</p>

                    </div>
                    <button class="btn btn-fb">
                        <a href="/physics" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            See Our Team
                        </a>
                    </button>

                    <button class="btn btn-danger">
                        <a href="https://tinyurl.com/joinstemeyphysics" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Register Now
                        </a>
                    </button>

                </div>
                <div class="class-con-item" style={{ gridTemplateRows: "repeat(2, auto)" }}>
                    <div class="sign-up-steps" style={{ marginBottom: "0" }}>
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

                    <div class="sign-up-steps" style={{ marginBottom: "0" }}>
                        <h2>What we provide</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Weekly Live Classes</p>
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


            <div class="class-con sign-up">
                <div id="settheory" class="class-con-item">
                    <img class="class-img" src={settheory} />
                    {/* <h2 class="h">Set Theory</h2> */}
                    <p class="class-des" style={{ marginBottom: "0" }}>

                        Set theory is the standard foundation of mathematics. Every mathematical object can be viewed as a set, and every theorem in any branch of mathematics, from geometry to calculus, is but one of the theorems In set theory. It takes Mathematics way beyond counting and arithmetic.
                    </p> {/* <Carousel /> */}
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 7+</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Aamen Muharram</p>
                        <p><span class="class-des-p">Time: </span>5-6 PM PDT Thursday</p>

                    </div>

                    <button class="btn btn-fb">
                        <a href="/math" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            See Our Team
                        </a>
                    </button>
                    <button class="btn btn-danger">
                        <a href="https://tinyurl.com/joinstemeysettheory" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}>
                            Register Now
                        </a>
                    </button>

                </div>
                <div class="class-con-item">
                    <h2 class="h">Set Theory Examples</h2>
                    <p class="class-des" style={{ marginBottom: "0" }}>

                        4 of your friends drank truth or lie potions at random and they say the following:  </p> {/* <Carousel /> */}
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Person A: </span>If I lie, so must B</p>
                        <p><span class="class-des-p">Person C: </span>There is at least one liar.</p>
                        <p><span class="class-des-p">Person D: </span>A is lying</p>
                    </div>

                    <p class="class-des">
                        Suppose you know for sure that if B says the truth, then C must be lying.
                        Who drank the lie potion?
                    </p>
                    <h2 class="h">Set Theory Videos Coming Soon!</h2>

                </div>

            </div>




            <div class="class-con sign-up">
                <div class="class-con-item">
                    <h2 class="h">Competition Math</h2>
                    <p class="class-des" style={{ marginBottom: "0" }}>
                        Provides the problem-solving skills needed for competition math problems from the AMC 8 and Mathcounts.</p>
                    {/* <Carousel /> */}
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Intended Ages: </span>Grades 5-8</p>
                        <p><span class="class-des-p">Lead Instructor: </span>Katherine Liu</p>
                        <p><span class="class-des-p">Prerequisites: </span>Prealgebra</p>

                    </div>


                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>diwgc7t</h2>
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
                        <h2>Concepts Covered</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Algebra</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Geometry</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Counting</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Probability</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Number Theory</p>
                        </div>
                    </div>

                    <div class="sign-up-steps" style={{ marginBottom: "0" }}>
                        <h2>What we provide</h2>
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Practice problems</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Diagnostic tests</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Practice problems explanations</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Techniques for competition math</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Online tutoring</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    )
}
