import React from "react";
import "./NewClasses.css";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Form from "../Form";
import Carousel from "./PhotoCarousel";

const gcCode1 = "659323"
const gcCode2 = "3423232"
const gcCode3 = "333i39i"


export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Classes</h1>

            <div class="class-con sign-up">
                <div class="class-con-item" style={{display: "grid", gridTemplateRows: "1fr", alignItems: "center"}}>
                    <h1 class="h">How Do I Sign Up?</h1>
                </div>
                <div class="class-con-item">
                    <div class="sign-up-steps">
                        <div class="step step1">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Scroll through this page to find the class or classes you want</p>
                        </div>

                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Open up Google Classroom with your PERSONAL email</p>
                        </div>
                        <div class="step">
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            <p>Add a Class using the class code provided in each description down below</p>
                        </div>
                    </div>
                </div>
                <div class="class-con-item">
                    <h2 class="h">Chemistry</h2>
                    <p class="p-team">
                       Coming Soon

                    </p>
                    {/* <Carousel /> */}
                    <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span> Grades 6-9</p>
                    <p><span class="class-des-p">Lead Instructor: </span>Christian Kim</p>
                    <p><span class="class-des-p">Prerequisites: </span>None!</p>

                    </div>
                    

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>Coming Soon</h2>
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
                <div class="class-con-item">
                    <h2 class="h">Biology</h2>
                    <p class="p-team">
                    Coming Soon!
                    </p>
                    {/* <Carousel /> */}
                    <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span> Grades 6-10</p>
                    <p><span class="class-des-p">Lead Instructor: </span>Aniketh Prasad</p>
                    <p><span class="class-des-p">Prerequisites: </span>None!</p>

                    </div>

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>Coming Soon</h2>
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
                <div class="class-con-item">
                    <h2 class="h">Competition Math</h2>
                    <p class="p-team">
                       
Provides the problem-solving skills needed for competition math problems from the AMC 8 and Mathcounts.

                    </p>
                    {/* <Carousel /> */}
                    <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span> Grades 5-8</p>
                    <p><span class="class-des-p">Lead Instructor: </span> Katherine Liu</p>
                    <p><span class="class-des-p">Prerequisites: </span>Prealgebra</p>

                    </div>
                    

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>Coming Soon!</h2>
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
                <div class="class-con-item">
                    <h2 class="h">PreCalc/Calc</h2>
                    <p class="p-team">
                    Coming Soon! 
                    </p>
                    {/* <Carousel /> */}
                    <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span>Grades 6-10</p>
                    <p><span class="class-des-p">Lead Instructor: </span>Daniel Lee</p>
                    <p><span class="class-des-p">Prerequisites: </span>Algebra</p>

                    </div>

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>Coming Soon</h2>
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
                <div class="class-con-item">
                    <h2 class="h">Geometry/Algebra</h2>
                    <p class="p-team">
                    Coming Soon! 
                    </p>
                    {/* <Carousel /> */}
                    <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span> Grades 5-10</p>
                    <p><span class="class-des-p">Lead Instructor: </span>Justin Liu</p>
                    <p><span class="class-des-p">Prerequisites: </span>Prealgebra</p>

                    </div>

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>Coming Soon</h2>
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
                <div class="class-con-item">
                    <h2 class="h">USACO Preparation</h2>
                    <p class="p-team">

                    We will start from the basics and build up, preparing for the USACO contests and learning about computing optimization and algorithms. The course will be taught in java but if you know any language well you will be fine.
                    </p>
                    {/* <Carousel /> */}
                    <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span> Grades 8-10</p>
                    <p><span class="class-des-p">Lead Instructor: </span>Sasmit Agarwal</p>
                    <p><span class="class-des-p">Prerequisites: </span>Knowledge of Programming</p>

                    </div>

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>wvbikmk</h2>
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
                <div class="class-con-item">
                    <h2 class="h">Intro to Coding</h2>
                    <p class="p-team">
                    
In this course we will be covering the basics of coding through learning java and going through the AP Computer Science course. By the end of the course students will know the main concepts of coding which will help in learning any language moving forward. 

                    </p>
                    {/* <Carousel /> */}
                    <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span>Grades 6-10</p>
                    <p><span class="class-des-p">Lead Instructor: </span>Aryan Mathur</p>
                    <p><span class="class-des-p">Prerequisites: </span>Pre-algebra</p>

                    </div>

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>Coming Soon</h2>
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
                <div class="class-con-item">
                    <h2 class="h">Physics</h2>
                    <p class="p-team">
                    Coming Soon
                    </p>
                    {/* <Carousel /> */}
                    {/* <div style={{boxShadow: "0px 0px 10px black", padding: "0 15px"}}>
                    <p><span class="class-des-p">Intended Ages: </span> Grades 5-10</p>
                    <p><span class="class-des-p">Lead Instructor: </span>Diana Poplacenel</p>
                    <p><span class="class-des-p">Prerequisites: </span>None!</p>

                    </div>

                    <p class="sign-up-p" > Sign up with the Classroom Code:</p>
                    <h2>Coming Soon</h2>
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
                    </button> */}

                </div>
                
            </div>
        </div>
    </div>
    )
}


/*
const [slide, setSlide] = React.useState(1);
    const [slide2, setSlide2] = React.useState(1);
    const [slide3, setSlide3] = React.useState(1);
    const [gcCode, setCode] = React.useState("680543");

    const [showForm, setShowForm] = React.useState(false);

    const handleShow = (num) => {
        return () => {
            switch (num) {
                case 1:
                    setCode(gcCode1); break;
                case 2:
                    setCode(gcCode2); break;
                case 3:
                    setCode(gcCode3); break;
                default:
                    break;
            }
            setShowForm(!showForm);
        }
    }


    const newHandle = (slideNum, direction) => {
        switch (slideNum) {
            case 1:
                return () => {
                    const nextSlideForward = slide < 2 ? slide + 1 : 1;
                    const nextSlideBackward = slide > 1 ? slide - 1 : 2;
                    const nextSlide = direction > 0 ? nextSlideForward : nextSlideBackward;
                    setSlide(nextSlide);
                }
                break;
            case 2:
                return () => {
                    const nextSlideForward = slide2 < 2 ? slide2 + 1 : 1;
                    const nextSlideBackward = slide2 > 1 ? slide2 - 1 : 2;
                    const nextSlide = direction > 0 ? nextSlideForward : nextSlideBackward;
                    setSlide2(nextSlide);
                }
                break;
            case 3:
                return () => {
                    const nextSlideForward = slide3 < 2 ? slide3 + 1 : 1;
                    const nextSlideBackward = slide3 > 1 ? slide3 - 1 : 2;
                    const nextSlide = direction > 0 ? nextSlideForward : nextSlideBackward;
                    setSlide3(nextSlide);
                }
                break;
        }
    }

    const handleBackward = (e) => {
        const nextSlide = slide > 1 ? slide - 1 : 2;
        setSlide(nextSlide);
    }

*/