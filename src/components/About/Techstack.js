import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiAngularSimple, DiAws, DiCssTricks, DiSass } from "react-icons/di";
import { 
  SiPostgresql, SiDotnet, SiRedux, SiTypescript, SiBootstrap, 
  SiTailwindcss, SiMui, SiMongodb, SiExpress, SiNextdotjs, 
  SiDocker, SiKubernetes, SiCsharp, SiMicrosoftazure
} from "react-icons/si";
import { FaShieldAlt, FaNetworkWired } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRedux /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiAngularSimple /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDotnet /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCsharp /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiAws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftazure /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMui /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiSass /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaShieldAlt /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaNetworkWired /></Col>
    </Row>
  );
}

export default Techstack;
