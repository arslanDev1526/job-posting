import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InfiniteSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="slider-container mx-auto px-4 py-8">
      <p className='text-center text-xl'>These companies partnered with us to drive growth</p>
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <img className='md:w-48 md:h-48 w-32 h-32 object-contain' src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113b77c6152e23039c18256_logo-4.png" alt="Logo 1" />
        </div>
        <div className="flex justify-center items-center">
          <img className='md:w-48 md:h-48 w-32 h-32 object-contain' src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113b77c6152e23039c18256_logo-4.png" alt="Logo 1" />
        </div>
        <div className="flex justify-center items-center">
          <img className='md:w-48 md:h-48 w-32 h-32 object-contain' src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113b77c6152e23039c18256_logo-4.png" alt="Logo 1" />
        </div>
        <div className="flex justify-center items-center">
          <img className='md:w-48 md:h-48 w-32 h-32 object-contain' src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113b8373738b38da531a5af_webflow-logo.png" alt="Logo 2" />
        </div>
        <div className="flex justify-center items-center">
          <img className='md:w-48 md:h-48 w-32 h-32 object-contain' src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113b813b9e87f3e1448e196_logo-4.png" alt="Logo 3" />
        </div>
        <div className="flex justify-center items-center">
          <img className='md:w-48 md:h-48 w-32 h-32 object-contain' src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113b77c6152e25f40c18258_friday.png" alt="Logo 4" />
        </div>
        <div className="flex justify-center items-center">
          <img className='md:w-48 md:h-48 w-32 h-32 object-contain' src="https://assets-global.website-files.com/61139ac7385e74ae2ca2c6fd/6113b77c6152e274f2c18254_logo-5.png" alt="Logo 5" />
        </div>
      </Slider>
    </div>
  );
}

export default InfiniteSlider;
