import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiBurpsuite,
  SiPostman,
  SiSlack,
  SiJira,
  SiFigma,
  SiVmware,
  SiWireshark
} from "react-icons/si";
import { FaTerminal, FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BiLogoVisualStudio, BiLogoAdobe } from "react-icons/bi";
import { TbBrandPowershell } from "react-icons/tb";
import StackCard from "./StackCard";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoAdobe />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <StackCard icon={FaTerminal} label="PuTTY" sublabel="SSH / Telnet" />
      <StackCard icon={SiVmware} label="VMware" />
      <StackCard icon={TbBrandPowershell} label="PowerShell" />
      <StackCard icon={SiWireshark} label="Wireshark" />
      <StackCard icon={SiBurpsuite} label="Burp Suite" />
    </Row>
  );
}

export default Toolstack;
