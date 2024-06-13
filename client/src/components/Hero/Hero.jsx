import React from 'react';
import "./Hero.css"; // Fixed import statement
import { HiLocationMarker } from 'react-icons/hi'; // 2.2k (gzipped: 1.1k)
import CountUp from 'react-countup';
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        {/* leftside */}
        <div className='flexColStart hero-left'>
          {/* title */}
          <div className='hero-title'>
            <div className='orange-circle'/>
            <motion.h1 initial={{y: "2rem" ,opacity:0}}
            animate={{y: 0, opacity :1}}
            transition={{duration: 2, type:"spring"}}>
              Find Your <br/> Perfect <br/> Home
            </motion.h1>
          

           </div>
          {/* description */}
          <div className='flexColStart hero-des'>
            <span className='secondaryText'>Discover your dream home with our expert real estate services</span>
            <span className='secondaryText'>Find your perfect property with us - where dreams meet reality.</span>
          </div>


          {/* searchbar */}
          <div className='flexCenter search-bar'>
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type='text'/>
            <button className='button'>Search</button>
          </div>
          <div className='flexCenter stats'>



            {/* Counting number */}
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText jir'>Luxury Properties</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText jir'>
                 Happy Customers    </span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText jir'>Award Winnings</span>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className=' flexCenter hero-right'>
          <motion.div initial={{x:"7rem",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:2, type:"spring" }} className='image-container'>
            <img src='./hero-image.png' alt=""/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
