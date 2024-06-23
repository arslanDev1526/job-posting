
import React from "react";
import Slider from "react-slick";
import "./landingpage.css";

const Testimonials = () => {
  const settings = {
    arrows:false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "rgba(34, 34, 34, .4)",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {" "}
      </div>
    ),
  };

  const testimonials = [
    {
      image: "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40a4c62aae3e4fe14c_team-6.jpg",
      text: "“The Jobly team provides excellent support, listens to their users, and continually works to improve their product.”",
      name: "Alice Johnson",
      position: "Software Engineer at Microsoft"
    },
    {
      image: "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40d989d6cb18ee9c69_team-4.jpg",
      text: "“Jobly has transformed our hiring process. The platform is user-friendly, and the customer service is outstanding.”",
      name: "Michael Smith",
      position: "HR Manager at Amazon"
    },
    {
      image: "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg",
      text: "“I found my dream job through Jobly. The job alerts feature ensured I never missed an opportunity.”",
      name: "Emma Davis",
      position: "Product Manager at Google"
    }
  ];

  return (
    <div className="mt-5 md:mt-10">
      <div className="text-center space-y-7">
        <span className="bg-green-50 py-3 px-4 font">What They Think</span>
        <h1 className="text-3xl md:text-6xl font-semibold">Testimonials</h1>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="flex flex-col justify-between items-center mt-14 mb-8">
                <div className="border-4 border-green-200 rounded-full">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                  />
                </div>
                <h1 className="text-xl w-full md:w-1/2 text-center px-5 mt-7">
                  {testimonial.text}
                </h1>
                <span className="mt-7">{testimonial.name}</span>
                <span className="mt-1">{testimonial.position}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;


// import React, { useState } from "react";
// import Slider from "react-slick";
// import "./landingpage.css";

// const Testimonials = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const settings = {
//     arrows: false,
//     dots: true,
//     fade: false, // Set fade to false for custom transition
//     infinite: true,
//     speed: 900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     waitForAnimate: false,
//     beforeChange: (current, next) => {
//       setIsTransitioning(true);
//     },
//     afterChange: (current) => {
//       setIsTransitioning(false);
//       setSlideIndex(current);
//     },
//     customPaging: () => (
//       <div
//         style={{
//           width: "10px",
//           height: "10px",
//           backgroundColor: "rgba(34, 34, 34, .4)",
//           textAlign: "center",
//           cursor: "pointer",
//         }}
//       >
//         {" "}
//       </div>
//     ),
//   };

//   const testimonials = [
//     {
//       image: "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40a4c62aae3e4fe14c_team-6.jpg",
//       text: "“The Jobly team provides excellent support, listens to their users, and continually works to improve their product.”",
//       name: "Alice Johnson",
//       position: "Software Engineer at Microsoft",
//     },
//     {
//       image: "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40d989d6cb18ee9c69_team-4.jpg",
//       text: "“Jobly has transformed our hiring process. The platform is user-friendly, and the customer service is outstanding.”",
//       name: "Michael Smith",
//       position: "HR Manager at Amazon",
//     },
//     {
//       image: "https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg",
//       text: "“I found my dream job through Jobly. The job alerts feature ensured I never missed an opportunity.”",
//       name: "Emma Davis",
//       position: "Product Manager at Google",
//     },
//   ];

//   return (
//     <div className="mt-5 md:mt-10">
//       <div className="text-center space-y-7">
//         <span className="bg-green-50 py-3 px-4 font">What They Think</span>
//         <h1 className="text-3xl md:text-6xl font-semibold">Testimonials</h1>
//       </div>

//       <div className="slider-container">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className={isTransitioning ? "opacity-0 transition-opacity duration-500" : "opacity-100 transition-opacity duration-500"}>
//               <div className="flex flex-col justify-between items-center mt-14 h-80 mb-8">
//                 <div className="border-4 border-green-200 rounded-full">
//                   <img
//                     className="w-20 h-20 rounded-full"
//                     src={testimonial.image}
//                     alt={`${testimonial.name}`}
//                   />
//                 </div>
//                 <h1 className="text-xl w-full md:w-1/2 text-center px-5">
//                   {testimonial.text}
//                 </h1>
//                 <span>{testimonial.name}</span>
//                 <span>{testimonial.position}</span>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;