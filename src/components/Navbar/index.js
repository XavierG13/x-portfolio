import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

export default function index() {
  return (
    <Navbar expand={false}>
      <Container>
        <Navbar.Brand href="/" id="navbar__name">
          Xavier Guzman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="off-canvas__label">
              Hello There!
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black
              "
                href="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black
              "
                href="/projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black
              "
                href="mailto:guzmanxavi112@gmail.com"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
