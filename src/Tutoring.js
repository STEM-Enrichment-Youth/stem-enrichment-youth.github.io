import React from "react";



export default function Tutoring() {

    return (
        <div class="new-team-con" style={{minHeight: "100vh", marginBottom: "50px"}}>
            <div class="new-team-join">
                <h1>Global Tutoring Program</h1>
                <p>Fill Out this Application Form and we will get back to you as soon as we can!</p>
                <button class="btn btn-fb" style={{
                    backgroundColor: "black",
                    opacity: ".7"
                }}>
                        <a target="_blank" href="https://docs.google.com/document/d/1G0rCRJ5nD7GyPy9Tx0J3FlIxVfq1RmrTrsCo78_7cAc/edit?usp=sharing" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}> 
                        Click Here to Learn More 
                        </a>
                    </button>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdsWj9-F9ovBl2oyjwJ3zXRE7q8VK92YAtrgjjeZIyuFbP4Dw/viewform?embedded=true" width="640" height="2817" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>


        </div>
    )
}

