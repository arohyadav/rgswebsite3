import { useState, useEffect } from 'react';
 import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
//import { sliderData } from "./Data/slider-data";
import { homeData } from './Home-dataslide';
//import "./Slider.scss";
import './Home.scss';
import './Home.css';



const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = homeData.length;


 
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log('next');
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log('prev');
  };
  

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className='home-slider'>
     <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} /> 
       <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> 
      {homeData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <video
                  className='home-video-wrapp'
                  src={slide.video}
                  muted
                  playsInline
                  autoPlay
                  loop
                >
                  
                </video>

            <h3 className='h3-homestyle'>{slide.heading}</h3>

            {/* <button class="controls" id="pause">Pause</button> */}

              </div>
              //   </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;

