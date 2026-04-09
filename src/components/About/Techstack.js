import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiAngularSimple, DiAws, DiSass } from "react-icons/di";
import { 
  SiPostgresql, SiDotnet, SiRedux, SiTypescript, SiBootstrap, 
  SiTailwindcss, SiMui, SiMongodb, SiExpress, SiNextdotjs, 
  SiDocker, SiKubernetes, SiSharp, SiTrendmicro, SiPaloaltonetworks
} from "react-icons/si";
import { FaMicrosoft, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import StackCard from "./StackCard";

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
      <Col xs={4} md={2} className="tech-icons"><SiSharp /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiAws /></Col>
      <Col xs={4} md={2} className="tech-icons"><VscAzure /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMui /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiSass /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaShieldAlt /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaNetworkWired /></Col>
      <StackCard icon={SiTrendmicro} label="Vision One" sublabel="Trend Micro" />
      <StackCard icon={SiTrendmicro} label="Apex One" sublabel="Trend Micro" />
      <StackCard icon={SiTrendmicro} label="Email Inspector" sublabel="Trend Micro" />
      <StackCard icon={SiTrendmicro} label="Deep Discovery" sublabel="Trend Micro" />
      <StackCard icon={SiPaloaltonetworks} label="Palo Alto" sublabel="Networks" />
      <StackCard icon={FaMicrosoft} label="Exchange" sublabel="Microsoft" />
      <StackCard icon={FaMicrosoft} label="Active Directory" sublabel="Microsoft" />
    </Row>
  );
}

export default Techstack;
