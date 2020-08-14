import React, { Component } from "react";
import "./timeline.css";
import Papa from 'papaparse';
import speakers from './speakers.csv';

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

function cleanSpeakerName(speaker)
{
  speaker = speaker.includes("Dr.") ? speaker.split("Dr.")[1] : speaker;
  speaker = speaker.trim();
  return speaker;
}
   
export function TimelineEntry(props) {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        async function getData() {
          const response = await fetch(speakers)
          const reader = response.body.getReader()
          const result = await reader.read() // raw array
          const decoder = new TextDecoder('utf-8')
          const csv = decoder.decode(result.value) // the csv text
          const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
          const rows = results.data // array of objects
          setRows(rows)
        }
        getData()
    }, [])
    let talkDescription = "";
    for (let item of rows)
    {
      if(cleanSpeakerName(item.speaker) == cleanSpeakerName(props.speaker))
      {
        console.log(item.talkDescription)
        talkDescription = item.talkDescription
      }
    }

    return (
      <li class="timeline-item">
        <div class="timeline-info">
            <span>{props.time}</span>
        </div>
        <div class="timeline-marker"></div>
        <a class="timeline-content" href={props.link} >
            <h3 class="timeline-title">{props.speaker}</h3>
            <p class="timeline-professor">{props.professor}</p>
            <p class="timeline-description">{props.description}</p>
    <div class="timeline-detailed"><p>{talkDescription}</p></div>
        </a>
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