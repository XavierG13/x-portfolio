import React from "react";

import x__photo from "../assets/images/xavierguzman.png";
import resume from "../assets/images/ResumeXG.pdf";

import { Container, Figure, Row } from "react-bootstrap";

import TechStack from "../components/Languages/TechStack.js";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div id="home-page">
      <section id="about-me">
        <Row className="about-me__info">
          <Container className="about-me__info--container">
            <Figure className="about-me__picture--mask">
              <Figure.Image
                id="about__me--picture"
                src={x__photo}
                roundedCircle
              />
            </Figure>
            <h1 className="about-me__info--title">
              Hello! I am <span className="text--blue">Xavier Guzman</span>
            </h1>
            <p className="about-me__info--para">
              I am a
              <strong className="text--blue"> Full Stack Developer</strong> and
              <strong className="text--blue"> Personal Trainer</strong>. My
              passions are assisting others on their journey to be the best
              version of themselves as well as building responsive web
              applications.
            </p>
            <div className="about-me__links">
              <a
                href="https://www.linkedin.com/in/xavierguzman1993
"
                className="about-me__link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/XavierG13" className="about-me__link">
                <i className="fab fa-github"></i>
              </a>
              <a href="" className="about-me__link">
                <i className="far fa-envelope"></i>
              </a>
              <a
                href={resume}
                rel="noreferrer"
                target="_blank"
                className="about-me__link"
              >
                <i className="fas fa-file-pdf"></i>
              </a>
            </div>
          </Container>
        </Row>
      </section>
      <section id="languages">
        <TechStack />
      </section>
      <section id="contact-form">
        <Contact />
      </section>
    </div>
  );
}
