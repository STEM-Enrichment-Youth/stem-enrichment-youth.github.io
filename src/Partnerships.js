import React from "react";



export default function Partnerships() {

    return (
        <div class="new-team-con" style={{minHeight: "100vh", marginBottom: "50px"}}>
            <div class="new-team-join">
                <h1>Shop our Merch + Donate to STEMEY</h1>
                <p>STEMEY is a 501(c)(3) organization accepting donations to help further our mission of democratizing STEM education.</p>
                <p>Please donate at the link below or shop our custom STEMEY Merch!</p>
                <button class="btn btn-fb" style={{
                    backgroundColor: "black",
                    opacity: ".7"
                }}>
                        <a target="_blank" href="https://bank.hackclub.com/donations/start/stem-enrichment-youth" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}> 
                        Click Here to Donate 
                        </a>
                </button>
                <p></p>
                <button class="btn btn-fb" style={{
                    backgroundColor: "black",
                    opacity: ".7"
                }}>
                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSecqTbp8lSl9o1IyawpN0EqSKtTfIWRDG-MTexvFL2HrhbqAA/viewform?usp=sf_link" style={{
                            textDecoration: "none",
                            color: "white",
                            letterSpacing: "3px",
                            fontWeight: "200",
                            fontSize: "20px"
                        }}> 
                        Click Here to Shop our Merch 
                        </a>
                </button>

            </div>
        </div>
    )
}

