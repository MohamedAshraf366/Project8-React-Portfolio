import React from "react";
import { ReactTyped } from "react-typed"; // Use ReactTyped instead
import "../cssPages/home.css"
import cardRight from "../images/homeRightt.jpg"
import Button from "react-bootstrap/Button";

let Home = ()=>{
    const whatsappNumber = '201111166832'; // رقمك مع كود الدولة
const message = 'Hello, i need to contact with you';

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    return(
        <div className="home">
            <div className="container-fluid">
                <div className="card mb-3 border-0">
                    <div className="row g-0 ">
                        <div className="col-md-7 h-100" >
                        <div className="card-body fs-1 fw-bolder d-flex flex-column align-items-center  " >
                            <h3 className="card-title text-center welcome">Welcome All In My Profile</h3>
                            <p className="card-text">
                            <ReactTyped
                                strings={["Hi! I'm Mohamed Ashraf Abdelhafeez, communication Engineerm and studying now to be fullstack developer"]}
                                typeSpeed={50}
                                //backSpeed={30}
                                // loop
                            /></p>
                        </div>
                        <Button  size="lg" className="ms-3" onClick={() => window.open(whatsappUrl, '_blank')}>
                            <a href="/">Let's Connect</a>    
                        </Button>
                                        
                        </div>
                        <div className="col-md-5 homeImg">
                        <img src={cardRight} className="img-fluid rounded-start h-50  rounded-start-5 rounded-end-5"  />
                        </div>                 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;




