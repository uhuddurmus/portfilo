import React from "react";
import { Container } from "react-bootstrap";
import certificatePdf from "../../Assets/cert.pdf";

function Certificates() {
  return (
    <Container fluid className="certificate-section">
      <div className="certificate-frame-wrap">
        <iframe
          className="certificate-frame"
          src={certificatePdf}
          title="Certificates PDF"
        />
      </div>
    </Container>
  );
}

export default Certificates;
