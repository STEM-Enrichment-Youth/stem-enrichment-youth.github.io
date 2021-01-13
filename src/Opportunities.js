import React from "react";
import "./opportunities.css"
import marketingop1 from "./marketingop1.png"
import marketingop2 from "./marketingop2.png"
import videoop1 from "./videoop1.png"
import videoop2 from "./videoop2.png"


export default function Opportunities() {


  return (
    <div>
      <h1 style={{ padding: 10 }}>Opportunities</h1>
      <div class="grid">
        <div class="grid-item">
          <img src={marketingop1} />
        </div>
        <div class="grid-item">
          <img src={videoop1} />
        </div>
        <div class="grid-item">
          <img src={marketingop2} />
        </div>
        <div class="grid-item">
          <img src={videoop2} />
        </div>
        <div class="grid-item">
          <button class="btn btn-fb" style={{
            backgroundColor: "black",
            opacity: ".7",
          }}>
            <a href="/apply" style={{
              textDecoration: "none",
              color: "white",
              letterSpacing: "3px",
              fontWeight: "200",
              fontSize: "20px"
            }}>
            Apply
           </a>
          </button>
        </div>
        <div class="grid-item">
          <button class="btn btn-fb" style={{
            backgroundColor: "black",
            opacity: ".7",
          }}>
            <a href="/apply" style={{
              textDecoration: "none",
              color: "white",
              letterSpacing: "3px",
              fontWeight: "200",
              fontSize: "20px"
            }}>
            Apply
           </a>
          </button>
        </div>
      </div>
    </div>

  )
}

