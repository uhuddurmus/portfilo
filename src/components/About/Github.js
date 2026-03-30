import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="uhuddurmus"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          light: ["#ebedf0", "#e9ddff", "#c8abff", "#a66cff", "#7c3aed"],
          dark: ["#161b22", "#2d1b48", "#4c1d95", "#6d28d9", "#8b5cf6"],
        }}
      />
    </Row>
  );
}

export default Github;
