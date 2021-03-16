import React from "react";
import "./home.css";
import { Component } from "react";
import logo from "./stemworld2logo.png"
import schedule from "./stemworld2schedule.jpg"
import sponsor1 from "./stemworld2sponsor1.png"
import sponsor2 from "./stemworld2sponsor2.png"
import { Container, Row, Col } from 'react-grid-system';
import Timeline, { TimelineMarker } from './Timeline';
import scheduleCSV from "./STEMWorldScheduleSequelFinal.csv";
import Papa from "papaparse";

// Retrieve and parse data from csv file
const getData = async () => {
  const response = await fetch(scheduleCSV);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value);
  const results = Papa.parse(csv, { delimiter: ";", header: true });
  return results.data; // array of object data
}

// Modified timeline entry component to allow for short description to be displayed
const TimeLineEntry = (props) => {
  return (
    <li key={props.id} class="timeline-item">
      <div class="timeline-info">
        <span>{props.time + " PDT"}</span>
      </div>
      <div class="timeline-marker"></div>
      <a class="timeline-content" href={props.link} >
        <h3 class="timeline-title">{props.title}</h3>
        <h4>{props.speaker}</h4>
        <p class="timeline-description">{props.shortDescription}</p>
        <div class="timeline-detailed"><p>{props.description}</p></div>
      </a>
    </li>
  )
}

export default class STEMWorld2 extends Component {

  constructor() {
    super();
    this.state = {
      events: [] // keep track of events retrieved from csv file
    }
  }

  componentDidMount() {
    // Read data into events array in state object
    getData().then(events => {
      for (var event of events) {
        const mapping = {
          day: event.Day,
          time: event.Time,
          title: event.Title,
          speaker: event.Speaker,
          description: event.Description,
          shortDescription: event.ShortDescription
        }
        const eventData = this.state.events.slice();
        eventData.push(mapping);

        this.setState({ events: eventData });
      }
    });
  }

  closeModal() {

  }

  render() {
    return (
      <div style={{ marginTop: "70px" }}>
        <div style={{ background: "url(" + { logo } + ")", backgroundImage: "cover" }}>
          <div class="head-txt" style={{ width: "90%", marginLeft: "5%" }}>

            <h1 style={{ textAlign: "center" }} class="biggest-header-4">STEM World II</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img className="stemey-logo" src={logo} />
            </div>
            <h2 style={{ textAlign: "center", fontSize: "23px", marginBottom: "30px" }}> An unforgettable experience to build your future in STEM.</h2>
            <h2 style={{ textAlign: "center", fontSize: "19px", marginBottom: "25px" }}> When: March 19-28th on Zoom & Discord</h2>
            <h2 style={{ textAlign: "center", fontSize: "19px", marginBottom: "25px" }}> Who: Everyone is eligible to participate; however, only grades 12 or lower can compete. </h2>
            <h2 style={{ textAlign: "center", fontSize: "15px", width: "80%", marginLeft: "10%", marginBottom: "25px" }}> Hosted by STEM Enrichment Youth and the Education For All Foundation, STEM World II is a virtual, free STEM convention consisting of professional speaker workshops, high-school level competitions, and networking opportunities. We welcome STEM enthusiasts of ALL backgrounds, ages, ethnicities, genders, sexualities, and cultures.</h2>  
            <h2 style={{ textAlign: "center", fontSize: "13px", marginBottom: "25px" }}> Full schedule shown below. </h2>
            <p style={{ textAlign: "center" }}><a class="btn btn-full" href="https://tinyurl.com/stemworld2">RSVP (Closes 03/20)</a></p>
            <p style={{ textAlign: "center" }}><a class="btn btn-full" href="https://tinyurl.com/stemworld2-i">Informational Document</a></p>


            <div class="container" style={{ paddingTop: "0" }}>
              <Container>
                <Row>
                  <Col sm={6}>
                    <div>
                      <h2 style={{ textAlign: "left", lineHeight: "2" }}> Speaker Workshops </h2>
                      <p>Attend workshops led by industry professionals and top-ranking university professors from around the world, including researchers at Duke, Dartmouth, MIT, & more! </p>
                      <p>Workshop Topics include. . .</p>
                      <p>A Guide to Financial Literacy and the Importance of Management</p>
                      <p>Examining the Role of STEM Education in Reducing Global Poverty</p>
                      <p>Artificial Intelligence in Education </p>
                      <p>How COVID-19 is Changing STEM and the Jobs of Tomorrow</p>
                      <p>Analysis of COVID-19 Vaccines and Reactions</p>
                      <p>Biological Engineering, and the Ethical Controversy behind Genetic Engineering</p>

                    </div>
                  </Col>
                  
                  <Col sm={6}>
                    <div>
                      <h2 style={{ textAlign: "left", lineHeight: "2" }}> Global Networking </h2>
                      <p> Join the STEM World II sTEAMs to connect with a tight-knit, global community of STEM enthusiasts. Each sTEAM will host a variety of social events throughout STEM World II (03/20-28), including team dinners, game nights, cooking sessions, and more! </p>
                      <p>Participants will be sorted into 4 houses: Matcha, Oolong, Jasmine, Chai</p>
                      <p>Each house will have exclusive bonding events: Game Nights, Speed Friending, Boba/Food Chats, Talent Shows</p>
                      <h2 style={{ textAlign: "left", fontSize: "23px", marginBottom: "30px" }}> Interested in the sTEAMs?</h2>
                      <p style={{ textAlign: "left" }}><a class="btn btn-full" href="https://tinyurl.com/stemeydiscord">Join the STEMEY Discord</a></p>
                      <p style={{ textAlign: "left" }}><a class="btn btn-full" href="https://tinyurl.com/steamsquiz">Take our sTEAMs Sorting Quiz</a></p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <h2 style={{ textAlign: "left", lineHeight: "2" }}> Competitions </h2>
                      <p>Interested in testing your STEM knowledge and winning amazing prizes? Compete in STEM World II between 3/20-28. There will be Team and Individual rounds for competitions. All competitions will be conducted virtually and asynchronously over a 1-week long time slot.</p>
                      <h2 style={{ textAlign: "left", fontSize: "25px", marginBottom: "10px" }}> Individual Competitions </h2>
          <p>You will compete by yourself in 1-hour long tests, and you can choose which subject you would like to compete in.</p>
                      <p>There will be separate competitions for Math, Biology, Physics, and/or Chemistry.</p>
                    
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                    <h2 style={{ textAlign: "left", fontSize: "25px", marginTop: "20px" }}> Team Competitions </h2>
                      <p style={{textAlign: "left"}}>You will compete in a team of 3-4 participants for two 60-minute long tests with high school level questions. </p>
                      <p style={{textAlign: "left"}}>If you do not have a team, please request a team on the STEM World II RSVP form, and we will match you with other competitors as soon as possible.</p>
                      <p style={{textAlign: "left"}}>Each competition will consist of questions from Math, Biology, Physics, AND Chemistry. </p>
                      <p style={{ textAlign: "left" }}><a class="btn btn-full" href="https://tinyurl.com/stemworld2">Register to Compete</a></p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <h2 style={{ textAlign: "left", lineHeight: "2" }}> Sponsored By </h2>
                      <img style={{ width: "40%", padding: "20px" }} src={sponsor1} />
                      <img style={{ width: "40%", padding: "20px" }} src={sponsor2} />
                  </Col>
                </Row>

              </Container>
              
            </div>

            <h1 class="biggest-header-2" style={{ marginTop: "50px" }}>Schedule</h1>
            <div class="stem-world" style={{ height: "auto" }}>
              <div style={{ width: "90%" }}>
                <ul class="timeline timeline-centered">

                  <TimelineMarker
                    title="Friday, March 19"
                  />
                  {this.state.events.filter(event => String(event.day) === "19-Mar").map((event, index) => { // Retrieve all events for this day
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Saturday, March 20"
                  />
                  {this.state.events.filter(event => String(event.day) === "20-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Sunday, March 21"
                  />
                  {this.state.events.filter(event => String(event.day) === "21-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Monday, March 22"
                  />
                  {this.state.events.filter(event => String(event.day) === "22-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Tuesday, March 23"
                  />
                  {this.state.events.filter(event => String(event.day) === "23-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Wednesday, March 24"
                  />
                  {this.state.events.filter(event => String(event.day) === "24-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Thursday, March 25"
                  />
                  {this.state.events.filter(event => String(event.day) === "25-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Friday, March 26"
                  />
                  {this.state.events.filter(event => String(event.day) === "26-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Saturday, March 27"
                  />
                  {this.state.events.filter(event => String(event.day) === "27-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                  < TimelineMarker
                    title="Sunday, March 28"
                  />
                  {this.state.events.filter(event => String(event.day) === "28-Mar").map((event, index) => {
                    return <TimeLineEntry
                      id={index}
                      title={event.title}
                      speaker={event.speaker}
                      time={event.time}
                      shortDescription={event.shortDescription}
                      description={event.description}
                    />
                  })
                  }

                </ul>
              </div>
            </div>

            <h1 class="biggest-header-2" style={{ marginTop: "50px" }}>FAQ</h1>
            <div class="container" style={{ paddingTop: "0px" }}>
              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}> Can I attend STEM World without participating in the competitions? </h2>
              <p style={{ marginLeft: "20" }}>Yes! You can attend STEM World without joining a team. The workshops are independent of the competitions so you will have equal access to the speaker’s material as anyone else.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}> I do not have a team for the competition, can I still compete?</h2>
              <p style={{ marginLeft: "20" }}>Yes! Anyone and everyone can compete. If you do not have a team, we will automatically sort you into one of our four sTEAMs (Jasmine, Matcha, Chai, and Oolong) when you join the STEMEY discord <a style={{ color: "#007bff" }} href="https://tinyurl.com/stemeydiscord">here</a>. Keep in mind the deadline to join a team will be the date the event starts: March 20th. </p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>What can I win?</h2>
              <p style={{ marginLeft: "20" }}>Competition prizes include Amazon gift cards, technology such as keyboards and mice, water flasks, and many more!</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}> Do I need to stay the entire time?</h2>
              <p style={{ marginLeft: "20" }}>Absolutely not. We recognize that you have other commitments so we have made the entire event open. This means that if you are interested in only a particular speaker or topic, you may choose to join at that specific time and leave according to your own schedule. There will be no workshops that overlap each other.</p>
              <p style={{ marginLeft: "20" }}>Moreover, if you miss a workshop or talk, all of the presentations will be uploaded on both Education for All Foundation and STEM Enrichment Youth’s Youtube. The benefits of attending live would be the relationships and questions you may propose to the speaker.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>What can I gain from attending this event?</h2>
              <p style={{ marginLeft: "20" }}>By attending this event and participating in the competitions, you have a chance to establish professional connections and work in a team with like-minded individuals. Moreover, our speaker events, which feature professors from distinguished programs, will give you insight into how our perspective on STEM and education is changing.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>How will the speaker events be conducted?</h2>
              <p style={{ marginLeft: "20" }}>Speaker events and workshops will only be held on the weekends (March 20th-21st and 27-28th). Each speaker will present their subtopic/ focus around the general theme and there will be time after each workshop to ask questions. Each speaker block, including the Q&A session, is estimated to be around 1 hour long.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>Will I be able to ask questions during the event or during the speaker events?</h2>
              <p style={{ marginLeft: "20" }}>Yes, the chat function will be open for conversation and we will have moderators to present your question to the speaker. Because of time constraints, we will not be able to get to all of the questions in the chat. Please direct all your questions to the host of the meeting.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>How will the social networking events be conducted?</h2>
              <p style={{ marginLeft: "20" }}>All social events will be conducted over Zoom and Discord for 30 min - 1 hour time periods, hosting Breakout Rooms of 4-5 individuals at a time.</p>
              <p style={{ marginLeft: "20" }}>Networking events will focus on cultivating meaningful, casual conversation through a variety of activities, including video game nights and team dinners. Certain social events will be exclusive to different sTEAMs, but we will also have events open to the global public. </p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>How will I ensure I get arranged with my preferred partner(s)?</h2>
              <p style={{ marginLeft: "20" }}>Your preferred partner(s) will be in a blocking group. Meaning, you will all stay together but will be further arranged with other groups. </p>


            </div>

          </div>
        </div>
      </div>
    )
  }
}
