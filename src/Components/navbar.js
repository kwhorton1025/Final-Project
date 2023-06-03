import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt="Your Company Logo"
              src="https://th.bing.com/th/id/R.b4ac8c0295372eaf55bc1a3acc01a4b9?rik=qiNTuHY%2f%2bLgbrA&pid=ImgRaw&r=0"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Ridgetop Ranch Rescue
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">Horses</Nav.Link>
              <Nav.Link href="/apply">Application</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="https://th.bing.com/th/id/R.b4ac8c0295372eaf55bc1a3acc01a4b9?rik=qiNTuHY%2f%2bLgbrA&pid=ImgRaw&r=0"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Your Company Logo"
            />{" "}
            Ridgetop Ranch Rescue
          </Navbar.Brand>
          <div className="ml-auto">
            <div className="d-flex align-items-center">
              <Form.Control
                type="email"
                placeholder="Email Newsletter Signup!"
                className="mr-sm-2"
              />
              <Button className="button-size" variant="outline-light">
                Enter
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;

//This is the code for my navbars at the top and bottom of my pages. I wish the bottom navbar wasn't visible when user was scrolled all the way to the top of the page, like how the top navbar is gone when you scroll all the way down to the bottom of the page.

