import React, { Component } from "react";
import "./timeline.css";
import Tabletop from 'tabletop';


class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/13apeTyXK3A9LB7RimIq4PjACZmW90xKLghNxnTT-4QU/pubhtml',
      // key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2PndbsYkCuYAES6e0ZMXwbgNcwciMVrXbeuDUAjZaAgEfjGShhewromODRYn4m0lmCZw2ca0GX5zD/pubhtml', 
      callback: (googleData, tabletop) => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
    console.log("--------");
    console.log(this.state.data);
    console.log("--------");
  }

  render() {
    return (
      <ul class="timeline timeline-centered">
      </ul>
    );
  }
}

export default Timeline;
   
export function TimelineEntry(props) {
    return (
      <li class="timeline-item">
        <div class="timeline-info">
            <span>{props.time}</span>
        </div>
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3 class="timeline-title">{props.speaker}</h3>
            <p class="timeline-description">{props.description}</p>
        </div>
      </li>
      );
}

export function TimelineMarker(props) {
  return (
    <li class="timeline-item period">
        <div class="timeline-info"></div>
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h2 class="timeline-title">{props.title}</h2>
        </div>
    </li>
  );
}