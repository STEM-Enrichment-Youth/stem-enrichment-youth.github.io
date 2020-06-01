import React from "react"; 
import Carousel from "./Carousel"; 
import { withStyles } from "@material-ui/core/styles"; 
import clsx from "clsx"; 
import AddLocationIcon from '@material-ui/icons/AddLocation';
import "./home.css"; 

const who = {
  minHeight: "120vh", 
  padding: "50px 30px",
}
const whoWeAre = {
    display : "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)", 
    gridGap: "30px", 
    minHeight: "50vh",
  }

const item = {
  margin: "0", 
  borderRadius: "1em",
  minHeight: "350px",
  boxShadow: "0px 0px 20px black",
  display: "grid", 
  gridTemplateColumns: "1fr", 
  gridTemplateRows: "repeat(6, 1fr)",
  maxHeight: "450px",
  gridGap : "10px", 
  padding: "0 10%", 
  color: "white", 
  justifyItems: "center", 
}

const whyUs = {
  display : "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  marginTop: "50px", 
  gridGap: "40px"
}

function Home() {
  const [scale, setScale] = React.useState(false); 

  return (
    <div>
      <section class="who" style={who}>
        <div class="who-we-are" style={whoWeAre}>
          <div class="inspire item" style={item}>
            <AddLocationIcon
              style={{gridRow: "span 3", alignSelf: "end", fontSize: "60px"}}
            />
            <h2 style={{fontWeight: "100"}}>About Us</h2>
            <p style={{textAlign: "center", lineHeight: "160%", width: "90%"}} class="p">Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style</p>
          </div>
          <div class="motivate item" style={item}>
            <AddLocationIcon
              style={{gridRow: "span 3", alignSelf: "end", fontSize: "60px"}}
            />
            <h2 style={{fontWeight: "100"}}>About Us</h2>
            <p style={{textAlign: "center", lineHeight: "160%", width: "90%"}} class="p">Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style</p>
          </div>
          <div class="inspire item" style={item}>
            <AddLocationIcon
              style={{gridRow: "span 3", alignSelf: "end", fontSize: "60px"}}
            />
            <h2 style={{fontWeight: "100"}}>About Us</h2>
            <p class="p" style={{textAlign: "center", lineHeight: "160%", width: "90%"}}>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style</p>
          </div>
        </div>
        <div class="why-us" style={whyUs}>
          <div class="inspire item" style={{...item, gridTemplateRows: "1fr" }}>
            <h1 style={{alignSelf: "center", fontSize: "150px", textAlign: "center"}}>Why Us?</h1>
          </div>
          <div class="motivate item" style={item}>

          </div>
        </div>
        <div class="why-us" style={whyUs}>
          <div class="motivate item" style={item}>

          </div>
          <div class="inspire item" style={{...item, gridTemplateRows: "1fr" }}>
            <h1 style={{alignSelf: "center", fontSize: "150px", textAlign: "center"}}>Why Us?</h1>
          </div>
        </div>
      </section>
    </div>

    
  )
}

export default Home;  