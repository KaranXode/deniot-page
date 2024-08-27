import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Content = (props)  => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    gsap.fromTo(
      element,
      { opacity: 0 }, 
      {
        opacity: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'center 100%',
          end: 'center -300%', 
          scrub: true, 
        
        },
      }
    );
  }, []);

  return (
    <div  className='lg:h-screen p-5'>
      <div 
        ref={textRef} 
        className='lg:mt-[50vh] lg:h-screen text-left lg:text-center lg:opacity-0 '
      >
        <h2 className='text-left lg:text-center font-normal text-[#505559] '>{props.title}</h2>
      </div>
    </div>
  );
};

export default Content;
