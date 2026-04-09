import React from "react";
import { Col } from "react-bootstrap";

function StackCard({ icon: Icon, label, sublabel }) {
  return (
    <Col xs={4} md={2} className="tech-icons stack-card">
      <div className="stack-card-icon">{Icon ? <Icon /> : null}</div>
      <div className="stack-card-copy">
        <span className="stack-card-label">{label}</span>
        {sublabel ? <span className="stack-card-sublabel">{sublabel}</span> : null}
      </div>
    </Col>
  );
}

export default StackCard;
