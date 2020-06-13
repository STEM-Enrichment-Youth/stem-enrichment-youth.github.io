import React from "react"; 
import Navbar from "./Navbar.js"; 



export default function Join() {
    
    return (
        <div class="new-team-con">   
            <Navbar/>   
            <div class="new-team-join">
            <h1 style={{fontSize: "500%"}}>Interested in teaching STEM this summer?</h1>
            <p>Fill Out this Application Form and we will get back to you as soon as we can!</p>
            <div class="typeform-widget" 
                data-url="https://form.typeform.com/to/Wnxscz" 
                style={{width: "80%", margin: "0 auto", height: "500px"}}>
            </div> 
            </div>  
            

        </div>
    )
}
