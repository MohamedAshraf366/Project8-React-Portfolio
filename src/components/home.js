import React from "react";
import { ReactTyped } from "react-typed"; // Use ReactTyped instead
import "../cssPages/home.css"
import cardRight from "../images/homeRightt.jpg"
import Button from "react-bootstrap/Button";

let Home = ()=>{
    return(
        <div className="home">
            <div className="container-fluid">
                <div class="card mb-3 border-0">
                    <div class="row g-5 ">
                        <div class="col-md-7 h-100" >
                        <div class="card-body fs-1 fw-bolder d-flex flex-column align-items-center  " >
                            <h3 class="card-title text-center welcome">Welcome All In My Profile</h3>
                            <p class="card-text">
                            <ReactTyped
                                strings={["Hi! I'm Mohamed Ashraf Abdelhafeez, communication Engineerm and studying now to be fullstack developer"]}
                                typeSpeed={50}
                                //backSpeed={30}
                                // loop
                            /></p>
                        </div>
                        <Button  size="lg" className="ms-3">
                            <a href="/connect">Let's Connect</a>    
                        </Button>
                                        
                        </div>
                        <div class="col-md-5 homeImg ">
                        <img src={cardRight} class="img-fluid rounded-start h-50 rounded-start-5 rounded-end-5"  />
                        </div>                 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;




