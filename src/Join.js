import React from "react";
import Navbar from "./Navbar.js";
import { Component } from "react";
import logo from "./stemworld2logo.png"
import schedule from "./stemworld2schedule.jpg"
import sponsor1 from "./stemworld2sponsor1.png"
import sponsor2 from "./stemworld2sponsor2.png"
import { Container, Row, Col } from 'react-grid-system';



export default function Join() {

    return (
        <div style={{ background: "url(" + { logo } + ")", backgroundImage: "cover", backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div style={{ width: "90%", marginLeft: "5%" }}>

                <h1 style={{ textAlign: "center", textTransform: "none"}} class="biggest-header-4">Volunteer with Us</h1>

                <section class="who">
                    <div class="why-us">
                        <div class="motivate item steps-item-2">
                            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Application Process</h2>
                            <div class="step step1">
                                <p>We are looking for committed individuals who are passionate about STEM and STEMEY’s work. If you are not willing to put extensive time and effort into your role at STEMEY, please do not apply.</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>We offer rolling admissions throughout the year for individuals of all STEM interests. </p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Please read over our organization's initiatives and current openings before applying.</p>
                            </div>
                        
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>You may not apply to STEMEY if you have a history of academic, disciplinary, or sexual misconduct.</p>
                            </div>
                            <a style={{ color: "white" }} class="btn btn-full" href="https://docs.google.com/document/d/1C9XCsE7-mB-9enPewEhcudGfwb04sZfgeXucDXnQ1cQ/edit">Current Openings</a>


                        </div>
                        <div class="motivate item steps-item-2">
                            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Step 1</h2>
                            <div class="step step1">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>View Eligibility and Job Descriptions for positions you are interested in.</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Tutor Eligibility: 3.50+ Unweighted GPA (High School), Grades 8+</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Video Editor, Design, and Web Development Eligibility: Be able to demonstrate proficiency by providing a sample</p>
                            </div>
                            
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Marketing Intern Eligibility: Enrollment in an undergraduate institution or above</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>No additional eligibility requirements for student ambassador, or director of communications and engagement
            </p>
                            </div>

                        </div>

                        <div class="motivate item steps-item">
                            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Step 2</h2>
                            <div class="step step1">
                                <p>Apply for the position your are interested in.</p>
                            </div>

                            <h2 style={{width: "100%", textAlign: "left"}}>Academics</h2>
                            <div class="step">
                                <a style={{ color: "white" }} class="btn btn-full" href="https://docs.google.com/forms/d/e/1FAIpQLSfPC7NDahQTNQjysplNA0OTYXKhdAXL55yn7sjyUGsL-6n-qg/viewform">Instructors and Tutors</a>
                            </div>
                            <h2 style={{width: "100%", textAlign: "left"}}>Communications</h2>
                            <div class="step">
                                <a style={{ color: "white" }} class="btn btn-full" href="https://forms.gle/TNhF2Q3TxhudY4ct9">Marketing Interns/Student Ambassadors</a>
                            </div>
                            <div class="step">
                                <a style={{ color: "white" }} class="btn btn-full" href="https://forms.gle/TNhF2Q3TxhudY4ct9">Director of Community Engagement</a>
                            </div>
                            <div class="step">
                                <a style={{ color: "white" }} class="btn btn-full" href="https://docs.google.com/forms/d/e/1FAIpQLSdlHGOBW5rlX7UlrbqRnmCPRx02-nShXhkp0alQqzeysNt1SQ/viewform?usp=sf_link">Podcast Team</a>
                            </div>
                            <h2 style={{width: "100%", textAlign: "left"}}>Design</h2>
                            <div class="step">
                                <a style={{ color: "white" }} class="btn btn-full" href="https://forms.gle/uy4igveTxTB9evat5">Video Editor/Animator</a>
                            </div>
                            <div class="step">
                                <a style={{ color: "white" }} class="btn btn-full" href="https://forms.gle/uy4igveTxTB9evat5">Design or Web Development</a>
                            </div>
                        </div>
                        <div class="motivate item steps-item-2">
                            <h2 style={{ fontWeight: "100", letterSpacing: "4px" }}>Step 3</h2>
                            <div class="step step1">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>Once you have applied, if you meet eligibility criteria you will receive a link to schedule an interview.</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>If you miss your interview, there will be NO MAKE-UP INTERVIEWS.</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>In special circumstances if rescheduling is absolutely necessary, please email stemenrichmentyouth@gmail.com with the reason for rescheduling at least 24 hours before your interview.</p>
                            </div>
                            <div class="step">
                                <i class="fas fa-arrow-alt-circle-right"></i>
                                <p>(WiFi issues are not an acceptable reason to miss an interview, as you can access cellular networks). </p>
                            </div>

                        </div>



                    </div>



                </section>

            </div>
        </div>
    )
}

