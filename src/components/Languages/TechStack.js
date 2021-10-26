import React from "react";
import { Container, Row } from "react-bootstrap";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css3.png";
import javascript from "../../assets/images/javascript.png";
import typescript from "../../assets/images/typescript.png";
import react from "../../assets/images/react.png";
import mongodb from "../../assets/images/mongodb.png";
import mysql from "../../assets/images/mysql.png";

export default function TechStack() {
  return (
    <Row>
      <h1 className="section__title">
        <span className="text--blue">Tech Stack</span>
      </h1>
      <div className="language__list">
        <div className="language">
          <figure className="language__img--wrapper">
            <img src={html} alt="HTML logo" className="language__img" />
          </figure>
          <span className="language__name">HTML</span>
        </div>
        <div className="language">
          <figure className="language__img--wrapper">
            <img src={css} alt="CSS logo" className="language__img" />
          </figure>
          <span className="language__name">CSS</span>
        </div>
        <div className="language">
          <figure className="language__img--wrapper">
            <img
              src={javascript}
              alt="Javascript logo"
              className="language__img"
            />
          </figure>
          <span className="language__name">Javscript</span>
        </div>
        <div className="language">
          <figure className="language__img--wrapper">
            <img
              src={typescript}
              alt="TYPESCRIPT logo"
              className="language__img"
            />
          </figure>
          <span className="language__name">Typescript</span>
        </div>
        <div className="language">
          <figure className="language__img--wrapper">
            <img src={react} alt="REACT logo" className="language__img" />
          </figure>
          <span className="language__name">React</span>
        </div>
        <div className="language">
          <figure className="language__img--wrapper">
            <img src={mongodb} alt="MONGO logo" className="language__img" />
          </figure>
          <span className="language__name">MongoDB</span>
        </div>
        <div className="language">
          <figure className="language__img--wrapper">
            <img src={mysql} alt="MYSQL logo" className="language__img" />
          </figure>
          <span className="language__name">MySQL</span>
        </div>
      </div>
    </Row>
  );
}
