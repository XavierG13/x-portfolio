import React from "react";
import x__photo from "../assets/images/xavierguzman.png";
import { Col, Container, Figure, Image, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="container__about">
      <Row class="about__me">
        <Col class="about__me--info">
          <Figure className="about-me__picture--mask">
            <Figure.Image
              id="about__me--picture"
              src={x__photo}
              roundedCircle
            />
          </Figure>
        </Col>
      </Row>{" "}
    </Container>
  );
}
