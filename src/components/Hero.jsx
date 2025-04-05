import React, { useRef } from 'react';
import Carousel from './Carousel';
import './Hero.css';

const Hero = () => {
  // const parallaxRef = useRef(null);

  return (



    <div className="hero-container" >
      {/* <div className="hero-txt">
          <h3 class="text-animation">I'm a <span></span> </h3>
          </div> */}
      
      {/* <img
              src={heroBackground}
              className="hero-background-image"
                    
              
              alt="hero"
            /> */}



      <div className="hero-image-wrapper">


        <div className="hero-image">


          {/* <img
                  src={robot}
                  className="hero-robot"
                  width={1024}
                  height={490}
                  alt="Robot"
                /> */}
          <div className='carousel-compo'>
            <Carousel />
          </div>
        </div>








      </div>


    </div>



  );
};

export default Hero;