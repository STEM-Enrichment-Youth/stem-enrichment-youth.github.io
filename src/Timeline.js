import React, { Component } from "react";
import "./timeline.css";


class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
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