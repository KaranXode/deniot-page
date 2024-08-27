'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  "https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot@640w.jpg",
  "https://admin.deniot.com/app/uploads/2020/07/dining-room_4_upper-east-side_new-york_jean-louis-deniot@640w.jpg",
  "https://admin.deniot.com/app/uploads/2020/07/living-room_1_touraine_jean-louis-deniot@640w.jpg",
  "https://admin.deniot.com/app/uploads/2022/01/living-room_15bis_eaton-square-_london_jean-louis-deniot@640w.jpg",
  "https://admin.deniot.com/app/uploads/2020/07/living-room_10_south-beach-loft_miami_jean-louis-deniot@640w.jpg"
];

const titles = [
  "Eylau",
  "Upper East Side",
  "Touraine",
  "Eaton Square",
  "South Beach Loft"
];

const SliderCard = ({ direction = 'left-to-right' }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const isLeftToRight = direction === 'left-to-right';
    const desktopView = gsap.matchMedia();

    desktopView.add("(min-width: 769px)", () => {

      gsap.fromTo(
        slider.children,
        {
          x: isLeftToRight ? '-100%' : '100%',
          opacity: 0
        },
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: slider,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    });

   
    return () => {
      desktopView.revert(); 
    };
  }, [direction]);

  return (
    <div className='mb-[30px] lg:m-auto overflow-hidden'>
      <ul ref={sliderRef} className='flex flex-col lg:flex-row items-center gap-[30px] p-0 list-none w-full'>
        {imageUrls.map((url, index) => (
          <a href="#" key={index} className='flex-shrink-0'>
            <li>
              <img
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className='md:w-[220px] md:h-[220px] object-cover'
              />
              <div className='text-[25px] mt-5 mb-7'>{titles[index]}</div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SliderCard;
