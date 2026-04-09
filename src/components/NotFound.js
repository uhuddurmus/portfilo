import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container fluid className="not-found-section">
      <div className="not-found-card">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-text">
          The page you are looking for does not exist or the link is invalid.
        </p>
        <Link to="/" className="not-found-link">
          Back to home
        </Link>
      </div>
    </Container>
  );
}

export default NotFound;
