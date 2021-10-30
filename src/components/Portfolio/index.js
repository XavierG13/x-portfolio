import React from "react";
import { Col } from "react-bootstrap";

export default function index(props) {
  return (
    <section id="projects">
      <Col className="project__list">
        <div className="project">
          <div className="project__wrapper">
            <img src={props.img} className="project__img" alt="placeholder" />
            <div className="project__description">
              <h3 className="project__decscription--title text--blue">
                {props.title}
              </h3>
              <h4 className="project__description--sub-title">
                {props.description}
              </h4>
              <p className="project__description--para">
                A simple app that allows a user to manage their tasks. Users
                will be able to add, set reminders, and delete tasks.
              </p>
              <div className="project__description--links">
                <a
                  href={props.github}
                  target="_blank"
                  className="project__description--link"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={props.deploy}
                  target="_blank"
                  className="project__description--link"
                >
                  <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </section>
  );
}
