import React from "react";
import {Helmet} from "react-helmet"; 
import molbio from "./ClassPics/MolBio.png"
import anatomy from "./ClassPics/Anatomy.png"

export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-class">
            <h1>Fall Biology</h1>
    

            <div class="class-con sign-up">
            
                <div class="class-con-item">
                    <img class="class-img" src={molbio}/> 
                    <h2 class="h">Molecular Biology</h2>
                    <p class="class-des" style={{ marginBottom: "0" }}>
                       

                    Join the molecular biology class to explore the fascinating roles that molecules play in biology! In this class, you will gain an understanding of biological molecules, cellular and metabolic processes, genetics, gene expression, and current advances in this field. 
</p> 
                    <div class="class-intro" style={{ boxShadow: "0px 0px 10px black" }}>
                        <p><span class="class-des-p">Intended Ages: </span>11 yrs old + </p>
                        <p><span class="class-des-p">Lead Instructor: </span>Catherine Zhou</p>
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
                        <a href="https://www.eventbrite.com/e/stemey-weekly-molecular-biology-class-tickets-126924415343" style={{
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
                <img class="class-img" src={anatomy}/> 
                    <h2 class="h">Anatomy</h2>
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
                        <a href="https://www.eventbrite.com/e/stemey-weekly-anatomy-class-tickets-126923167611" style={{
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
            
       
        </div>
    </div>
    )
}
