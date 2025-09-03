import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Mustafa Uhud Durmuş </span>
            from <span className="purple">İstanbul, Türkiye.</span>
            <br />
            I am currently working as a{" "}
            <b className="purple">Software & Security Engineer</b> at{" "}
            <b className="purple">Fener Teknoloji ve Danışmanlık A.Ş.</b>
            <br />
            I graduated in{" "}
            <b className="purple">Computer Engineering</b> from Karadeniz
            Technical University and I am now pursuing a{" "}
            <b className="purple">Master’s in Computer Science</b> at Sakarya
            University.
            <br />
            <br />
            My career combines{" "}
            <b className="purple">web development</b> (React.js, Angular,
            Node.js, .NET, MongoDB) with{" "}
            <b className="purple">cybersecurity expertise</b> (Trend Micro Vision
            One, Apex One, Email Inspector, Deep Discovery, and Security
            Operations).
            <br />
            <br />
            Apart from coding and security engineering, here are a few things I
            truly enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime & Reading Manga 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music 🎵
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
