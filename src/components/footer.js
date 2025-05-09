import "../cssPages/footer.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

let Footer = () => {
    return (
        <div className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <Navbar.Brand className="d-flex align-items-center">
                            <img
                                alt="Logo"
                                src={logo}
                                width="50"
                                height="50"
                                className="rounded-circle me-3"
                            />
                            <span className="fs-2 fw-bold text-white">
                                <NavLink to="/">LOGO</NavLink>
                            </span>
                        </Navbar.Brand>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-end">
                        {/* Social Media Icons */}
                        <Nav className="d-flex gap-3 social-footer">
                            <a
                                href="https://www.facebook.com/profile.php?id=100000233248223"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-white"
                                    style={{ width: "40px", height: "40px" }}>
                                    <i className="fa-brands fa-facebook"></i>
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/mohamed-ashraf-497a13170"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-white"
                                    style={{ width: "40px", height: "40px" }}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </span>
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-white"
                                    style={{ width: "40px", height: "40px" }}>
                                    <i className="fa-brands fa-instagram"></i>
                                </span>
                            </a>
                        </Nav>

                        {/* Copyright Text */}
                        <small className="text-center fw-bolder text-white mt-3">
                            COPYRIGHT &copy; 2025 <strong>Mohamed Ashraf</strong>. All Rights Reserved.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
