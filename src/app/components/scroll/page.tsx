'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import mouseIcon from "../../assets/mouseIcon.svg";
import Image from 'next/image';

const ScrollIndicator = () => {
  const scrollRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollY / docHeight) * 100;

      gsap.to(circleRef.current, {
        rotation: scrollProgress * 3.6,
        ease: "power1.out",
        duration: 0.5
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="scroll-title" ref={scrollRef}>
        <p>Scroll to explore</p>
      </div>
     <div className='relative'>
     <div className="progress-circle" ref={circleRef}>
    
    </div>
    <Image src={mouseIcon} alt="scroll" className='absolute top-[16px] left-[19px]' />
     </div>
    </div>
  );
};

export default ScrollIndicator;
