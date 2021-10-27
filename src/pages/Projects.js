import React from "react";
import { Col, Row } from "react-bootstrap";
import Portfolio from "../components/Portfolio";
import items from "../assets/json/projects.json";

export default function Projects() {
  return (
    <Row id="project-page" className="justify-content-center">
      <h1 class="section__title text--blue">Projects</h1>
      {items.map((item) => (
        <Portfolio
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          github={item.github}
          deploy={item.deploy}
        />
      ))}
    </Row>
  );
}
