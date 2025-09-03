import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { FaLinkedin } from "react-icons/fa";

function About() {
  const openLinkedIn = () => {
    const newWindow = window.open(
      "https://www.linkedin.com/in/uhud-mustafa-durmus/",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.focus();
  };
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />

            <Row className="d-flex justify-content-center mt-4">
              <Col md="auto" className="text-center">
                <p>
                  You can also see my certificates on{" "}
                  <button
                    onClick={openLinkedIn}
                    style={{
                      color: "#0a66c2",
                      fontWeight: "bold",
                      textDecoration: "none",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FaLinkedin
                      style={{ marginRight: "5px", verticalAlign: "middle" }}
                    />
                    LinkedIn
                  </button>
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
