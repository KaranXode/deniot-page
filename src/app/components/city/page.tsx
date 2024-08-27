import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cities = [
  { name: 'Paris', urlParam: 'paris' },
  { name: 'France', urlParam: 'touraine' },
  { name: 'London', urlParam: 'london' },
  { name: 'New York', urlParam: 'new-york' },
  { name: 'Floride', urlParam: 'miami' },
  { name: 'Chicago', urlParam: 'chicago' },
  { name: 'Los Angeles', urlParam: 'boston' },
  { name: 'Capri', urlParam: 'capri' },
  { name: 'Bangkok', urlParam: 'bangkok' },
  { name: 'Hong Kong', urlParam: 'hong-kong' },
  { name: 'New Delhi', urlParam: 'new-delhi' },
  { name: 'Moscow', urlParam: 'moscow' },
];

const City = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll('.city-item');
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenWidth();

    if (!isSmallScreen) {
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
            fontSize: '96px',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            fontSize: '35px',
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 100%',
              end: 'bottom 50%',
              scrub: 1,
            },
          }
        );
      });
    }

    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, [isSmallScreen]);

  return (
    <>
      {isSmallScreen ? (
        <div className="bg-[#d2d2d2] px-6 py-12">
          <ul>
            {cities.map((city, index) => (
              <li key={index} className="text-[35px] text-white leading-[1.5]">
                <a href={`/projects?city=${city.urlParam}`} className="text-white">
                  {city.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-[#d2d2d2] px-6 py-12 lg:flex lg:justify-end lg:items-center block">
          <ul>
            {cities.map((city, index) => (
              <li key={index} className="city-item text-[35px] text-white leading-[1.5]">
                <a href={`/projects?city=${city.urlParam}`} className="text-white">
                  {city.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default City;
