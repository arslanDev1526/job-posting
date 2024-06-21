import React from "react";
import Slider from "react-slick";
import './landingpage.css';


const Testimonials = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  
      customPaging: () => (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor:  "rgba(34, 34, 34, .4)", // Darker grey for active dot, lighter grey for others
            textAlign: "center",
            cursor: "pointer"
          }}
        >
            {" "}
        </div>
      )
      
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div>
              <img className="w-24 h-24 rounded-full"
                src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg"
                alt=""
              />
            </div>
            <h1 className="text-3xl w-1/2 text-center">
              “The Jobly team provides excellent support, listens to their users
              and continually works to improve their product”
            </h1>
            <span>John Doe</span>
            <span>Designer at Dribble</span>
          </div>
        </div>

        <div>
        <div className="flex flex-col gap-5 justify-center items-center">
            <div>
              <img className="w-24 h-24 rounded-full"
                src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg"
                alt=""
              />
            </div>
            <h1 className="text-3xl w-1/2 text-center">
              “The Jobly team provides excellent support, listens to their users
              and continually works to improve their product”
              “The Jobly team provides excellent support, listens to their users
              and continually works to improve their product”
            </h1>
            <span>data data </span>
            <span>Designer at apple</span>
          </div>
        </div>
        <div>
        <div className="flex flex-col gap-5 justify-center items-center">
            <div>
              <img className="w-24 h-24 rounded-full"
                src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg"
                alt=""
              />
            </div>
            <h1 className="text-3xl w-1/2 text-center">
              “The Jobly team provides excellent support, listens to their users
              
            </h1>
            <span>Arslan</span>
            <span>Designer at Google</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
