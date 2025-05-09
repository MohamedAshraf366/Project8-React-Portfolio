import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "react-bootstrap/Button";
import "../cssPages/header.css"


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            alt="Logo"
            src={logo}
            width="50"
            height="50"
            className="rounded-circle me-3"
          />
          <span className="fs-2 fw-bold text-light">
            <Nav.Link href="/home">LOGO</Nav.Link>
          </span>
        </Navbar.Brand>

        {/* Navbar Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="m-auto gap-4 d-flex fs-4 navBar">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>

          {/* Social Media Icons */}
          <Nav className="ms-auto socialMedia gap-3">
            <Nav.Link href="https://facebook.com" target="_blank">
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-white p-2"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="fa-brands fa-facebook"></i>
              </span>
            </Nav.Link>

            <Nav.Link href="https://linkedin.com" target="_blank">
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-white p-2"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="fa-brands fa-linkedin"></i>
              </span>
            </Nav.Link>

            <Nav.Link href="https://instagram.com" target="_blank">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-white p-2"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="fa-brands fa-instagram"></i>
              </span>
            </Nav.Link>
          </Nav>
        
          <Button variant="outline-light" size="lg" className="ms-lg-3">
            <Nav.Link href="/connect">Let's Connect</Nav.Link>
            
            </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
