import React from "react";
import "../cssPages/projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Aos from "aos";
import { useEffect } from "react";
import project1 from "../images/projrct1.png";
import project2 from "../images/projrct2.png";
import project3 from "../images/projrct3.png";
import project4 from "../images/projrct4.png";
import project5 from "../images/projrct5.png";
import project6 from "../images/projrct6.png";
import project7 from "../images/projrct7.png";
import project8 from "../images/projrct8.png";
import project9 from "../images/projrct9.png";
import project12 from "../images/projrct12.png";
import project13 from "../images/projrct13.png";
import project14 from "../images/projrct14.jpeg";
import project15 from "../images/projrct15.jpeg";
import project16 from "../images/projrct16.jpeg";
import { NavLink } from "react-router-dom";



let Projects = ()=>{
    let dataBoot = [
        {
            id:1, 
            img:project1,
            url:"https://mohamedashraf366.github.io/pro1/",
            projectNo :"project1",
        },
        {
            id:2, 
            img:project2,
            url:"https://mohamedashraf366.github.io/pro2/",
            projectNo :"project2",
        },
        {
            id:3, 
            img:project3,
            url:"https://mohamedashraf366.github.io/pro3/",
            projectNo :"project3",
        },
        {
            id:4, 
            img:project4,
            url:"https://mohamedashraf366.github.io/Project4/",
            projectNo :"project4",
        },
        {
            id:5, 
            img:project5,
            url:"https://mohamedashraf366.github.io/Project5/",
            projectNo :"project5",
        },
        {
            id:6, 
            img:project6,
            url:"https://mohamedashraf366.github.io/Project6/",
            projectNo :"project6",
        },
        {
            id:7, 
            img:project7,
            url:"https://mohamedashraf366.github.io/Project7/",
            projectNo :"project7",
        },
        {
            id:8, 
            img:project8,
            url:"https://mohamedashraf366.github.io/Project8-React-Portfolio/",
            projectNo :"project8",
        },
        {
            id:9, 
            img:project9,
            url:"https://mohamedashraf366.github.io/Project10-React-Roberto/",
            projectNo :"project9",
        },
        {
            id:12, 
            img:project12,
            url:"https://mohamedashraf366.github.io/Project12-Ecommerce/",
            projectNo :"project12",
        },
        {
            id:13, 
            img:project13,
            url:"https://mohamedashraf366.github.io/Project13-Resturan-redboa/",
            projectNo :"project13",
        },
        {
            id:14, 
            img:project14,
            url:"https://ecommerce-nextjs-7kvwxo78x-moahmed-ashrafs-projects.vercel.app/",
            projectNo :"project14",
        },
        {
            id:15, 
            img:project15,
            url:"https://limitless-nextjs-fveaaaezp-moahmed-ashrafs-projects.vercel.app/",
            projectNo :"project15",
        },
        {
            id:16, 
            img:project16,
            url:"https://project15-next-da737c8nv-moahmed-ashrafs-projects.vercel.app/",
            projectNo :"project16",
        },
    ]
    useEffect(() => {
        Aos.init({
          duration: 800, // مدة الأنيميشن
          //once: true     // To make animation working once load the page
          once: false,
          mirror: true,
        });
      }, []);
    return(
        <div className="container mt-5">
            <ul className="nav nav-pills mb-3 d-flex justify-content-center align-items-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">My Projects</button>
                </li>                
            </ul>
            <div className="tab-content" id="pills-tabContent">
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="scrolling-pic tab-pane fade show active" style={{}} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div className="row g-5 mt-2">
                    {dataBoot.map((d)=>(
                        <div data-aos="fade-right"  data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="col-md-4">
                        <div   className="card text-bg-dark">
                            <NavLink to={d.url}>
                            <img src={d.img} className="card-img" alt={d.projectNo}  />
                            </NavLink>
                    
                    </div>
                    </div>
                    ))}
                    
                </div>
                </div>

            </div>
        </div>
    )
}
export default Projects;