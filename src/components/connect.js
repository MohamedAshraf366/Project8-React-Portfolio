import "../cssPages/connect.css"
import communicate from"../images/communicate.jpg"
import Button from "react-bootstrap/Button";

let Connect = ()=>{
    let data = [
        {id:1, label:"First Name"},
        {id:1, label:"second Name"},
        {id:1, label:"Email"},
        {id:1, label:"Phone Number"},
    ]
    return(
        <div className="connect" style={{marginTop:"80px", paddingTop:"50px"}}>
            <div className=" mb-3 container">
                <div className="row g-0">
                    <div className="col-md-5 d-flex justify-content-center align-items-center" >
                        <img src={communicate} className="img-fluid rounded-start rounded-end" alt="..." />
                    </div>
                    <div className="col-md-7 connect-form">
                        <div className="card-body text-white ms-lg-5">
                            <h1 className="card-title text-center fs-1 fw-bolder mb-4">Get In Touch</h1>
                            <div className="card-text">
                                <div className="row g-4">
                                    {data.map((d)=>(
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="FirstName"/>
                                                <label htmlFor="floatingInput">{d.label}</label>
                                            </div>
                                        </div>
                                    ))}
                                    

                                    <div className="col-md-12">
                                        <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                        </div>
                                    </div>

                                    <div className="connectBtn">
                                    <Button  size="lg" className="ms-3">
                                        <a href="/connect">Let's Connect</a>    
                                    </Button>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
                <div className="connectEmail container mt-5 d-flex justify-content-center align-items-center">
                    <div className="row p-lg-5">
                        <div className="col-md-6 ">
                            <p className="fw-bolder fs-1 text-center">
                                See my projects at once & leave here your email address. Thanks!
                            </p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control email-input" 
                                    placeholder="Enter your email" 
                                    aria-label="Recipient's email" 
                                    aria-describedby="button-addon2" 
                                />
                                <button className="btn submit-btn" type="button" id="button-addon2">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
        </div>
    )
}
export default Connect;