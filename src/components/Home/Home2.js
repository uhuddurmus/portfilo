import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey in tech started with curiosity and turned into a
              passion. Today, I am a{" "}
              <b className="purple">Software & Security Engineer</b> with strong
              expertise in both{" "}
              <b className="purple">development</b> and{" "}
              <b className="purple">cybersecurity</b>.
              <br />
              <br />I am fluent in{" "}
              <i>
                <b className="purple"> C#, JavaScript, and .NET </b>
              </i>{" "}
              and experienced in frameworks like{" "}
              <i>
                <b className="purple">React.js, Node.js, Angular</b>
              </i>{" "}
              along with{" "}
              <b className="purple">MongoDB and SQL-based databases</b>.
              <br />
              <br />
              My areas of interest include{" "}
              <i>
                <b className="purple">
                  Web Technologies, Security Solutions, and Cloud Platforms
                </b>
              </i>
              . Whenever possible, I bring my passion into practice by building
              secure applications and deploying enterprise-level security
              controls with{" "}
              <b className="purple">Trend Micro Vision One, Apex One,</b> and{" "}
              <b className="purple">Email Inspector</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/uhuddurmus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/uhud-mustafa-durmus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mustafauhuddurmus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
