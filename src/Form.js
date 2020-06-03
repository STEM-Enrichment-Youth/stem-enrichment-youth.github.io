import React from "react";

const pStyle = {
    fontWeight: "300", 
    fontSize: "17px"
  }
  
  const inputStyle = {boxShadow: "5px 5px 10px black", 
  fontWeight: "400",
  color: "white", 
  fontSize: "15px"}

export default (props) => {

    const [show, setShow] = React.useState(false); 
    
    const handleShow = (event) => {
        setShow(!show); 
    }

    return (
        <div style={(props.show || show) ? {} : {display: "none"}}>
            <button class="btn" onClick={handleShow}>
                <ion-icon name="close" style={{padding: "5px", paddingLeft: "0", paddingTop: "10px"}}></ion-icon>
            </button>
            <p class="sign" align="center" style={{ fontWeight: "100", fontSize: "50px", textAlign: "center", color: "white" }}>Sign Up!</p>
            <form class="form1" method="POST" action="https://www.weebly.com/" style={{ paddingTop: "20px" }}>
                <input class="un " type="text" align="center" name="username" placeholder="Username or Email" style={inputStyle} />
                <input class="pass" type="password" align="center" name="password" placeholder="Password" style={inputStyle} />
                <button class="submit" type="submit" align="center">Submit</button>
                
            </form>
            
        </div>
    )



}