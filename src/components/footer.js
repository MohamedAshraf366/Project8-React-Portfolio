import "../cssPages/footer.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

let Footer = () => {
    const whatsappNumber = '+201111166832';
    const message = 'Hello, i need to contact with you';

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    return (
        <div className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <Navbar.Brand className="d-flex align-items-center ">
                            <img
                                alt="Mohamed Ashraf"
                                src={logo}
                                width="50"
                                height="50"
                                className="rounded-circle me-3"
                            />
                            <span className="fs-2 fw-bold text-white">
                                <NavLink to="/" className='text-white' >Mohamed Ashraf</NavLink>
                            </span>
                        </Navbar.Brand>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center align-items-md-end">
                        {/* Social Media Icons */}
                        <Nav className="d-flex gap-3 social-footer">
                            <a
                                href="https://www.facebook.com/mohamed.ashraf.791060/"
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
                                onClick={() => window.open(whatsappUrl, '_blank')}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-white"
                                    style={{ width: "40px", height: "40px" }}>
                                    <i class="fa-brands fa-whatsapp"></i>
                                </span>
                            </a>
                        </Nav>

                        {/* Copyright Text */}
                        <small className="text-center fw-bolder text-white mt-3">
                            COPYRIGHT &copy; 2025
                            <a target="_blank" className="ps-1 pe-1 fs-5" href='https://github.com/MohamedAshraf366?tab=repositories'>Mohamed Ashraf</a>
                            . All Rights Reserved.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
