import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mustafa Uhud Durmuş </span>
            from <span className="purple"> İstanbul, Türkiye.</span>
            <br />
            I am currently employed as a software developer.
            <br />
            I have completed my undergraduate studies in computer engineering at Karadeniz Technical University and I am currently pursuing a master's degree in computer science at Sakarya University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime - Reading Manga and Comic
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
