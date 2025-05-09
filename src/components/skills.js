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
    { id: 1, percent: 90, field: "Communication Engineer" },
    { id: 2, percent: 80, field: "FrontEnd" },
    { id: 3, percent: 20, field: "BackEnd" },
    { id: 4, percent: 70, field: "Transmission Fiber" },
    { id: 5, percent: 70, field: "4G Optimization" },
    { id: 6, percent: 40, field: "5G Optimization" }
  ];

  // إعدادات السلايدر
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
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
                  <div
                    className="outerCircle"
                    style={{
                      background: `conic-gradient(rgb(195, 121, 238) ${progress[d.id] * 3.6}deg, rgb(133, 160, 240) 0deg)`
                    }}
                  >
                    <div className="innerCircle">{progress[d.id] || 0}%</div>
                  </div>
                  <div className="card-text text-center mt-2">
                    <h4 className="ms-3 mt-3 mb-5 fw-bold text-white">{d.field}</h4>
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
