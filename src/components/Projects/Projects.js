import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Pokedex from "../../Assets/Projects/1.png";
import todo from "../../Assets/Projects/2.png";
import fetch from "../../Assets/Projects/3.png";
import ecom from "../../Assets/Projects/4.png";
import weather from "../../Assets/Projects/5.png";
import ProductList from "../../Assets/Projects/6.png";
import Tailwind from "../../Assets/Projects/7.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pokedex}
              title="Pokedex App"
              description="A Web Site designed to catalog and provide information regarding the various species of Pokémon."
              ghLink="https://github.com/uhuddurmus/pokedex-app"
              demoLink="https://pokedex-app-uhuddurmus.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="To-Do App"
              description="Develop a to-do application using React and Redux."
              ghLink="https://github.com/uhuddurmus/to-do-list"
              demoLink="https://uhuddurmus-todo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fetch}
              title="Fetch Api"
              description="Implement fetching of random user data from an API using Redux Thunk."
              ghLink="https://github.com/uhuddurmus/user-random-fetch"
              demoLink="https://fetch-user-uhud.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              title="E-Commerce"
              description="I developed an e-commerce application using Angular and .NET. It features JWT authentication for login, user registration, product listings, a payment system, live chat support, and the ability to add new products."
              ghLink="https://github.com/uhuddurmus/Final-Case-Repo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather-App"
              description="Develop a weather application utilizing React, Redux, and a weather API."
              ghLink="https://github.com/uhuddurmus/Weather-Api"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProductList}
              title="ProductList"
              description="Create a product listing application using React, Redux, and .NET with JWT authentication, supporting multiple roles such as admin and user."
              ghLink="https://github.com/uhuddurmus/Workflow"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProductList}
              title="Leaflet"
              description="I created an app using React, js-leaflet, and .NET, where users can select coordinates from a map, send them to a .NET backend, and save them to a JSON file."
              ghLink="https://github.com/uhuddurmus/SAMM-mulakat-projesi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tailwind}
              title="coppywithtailwindcss"
              description="I recreated a website that originally used Bootstrap, but I redesigned it using Tailwind CSS."
              ghLink="https://github.com/uhuddurmus/coppywithtailwindcss"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
