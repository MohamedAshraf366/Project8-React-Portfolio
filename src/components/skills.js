import { memo, useEffect, useState } from "react";
import "../cssPages/skills.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const [scroly, setScroly] = useState(false);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setScroly(true);
      } else {
        setScroly(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!scroly) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        let updatedProgress = {};
        let allCompleted = true;

        data.forEach((d) => {
          if ((prevProgress[d.id] || 0) < d.percent) {
            updatedProgress[d.id] = (prevProgress[d.id] || 0) + 1;
            allCompleted = false;
          } else {
            updatedProgress[d.id] = d.percent;
          }
        });

        if (allCompleted) clearInterval(interval);
        return updatedProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [scroly]);

  // بيانات المهارات
  const data = [
    { id: 1,  field: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { id: 2,  field: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { id: 3,  field: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
    { id: 4,  field: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" },
    { id: 5,  field: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
    { id: 7,  field: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
    { id: 8,  field: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" },
    { id: 9,  field: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
    { id: 15,  field: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" },
    { id: 16,  field: "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000" },
    { id: 17,  field: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" },
    { id: 18,  field: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
    { id: 19,  field: "https://cdn.dribbble.com/userupload/41930880/file/original-633d9b239c12bbb0788b9faf25058c54.png" },

  ];

  // إعدادات السلايدر
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      }
    ]
  };

  return (
    <div className="skills">
      <h1 className="text-white text-center fs-1 fw-bolder pt-5">Skills</h1>
      <h4 className="text-white text-center fs-3 p-3">You can see my skills here</h4>
      <div className="slider-container container text-white">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id}>
              <div className="col-md-4">
                <div className="card-body">
                  <div className="card-text text-center mt-4">
                    <img src={d.field} className="" style={{width:'90px'}} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default memo(Skills);
