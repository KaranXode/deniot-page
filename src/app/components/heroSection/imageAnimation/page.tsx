'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const ImageAnim = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  

  const imageUrls = [
    "https://admin.deniot.com/app/uploads/2020/07/living-room_2_eylau_paris_jean-louis-deniot.jpg", 
    "https://admin.deniot.com/app/uploads/2020/07/dining-room_4_upper-east-side_new-york_jean-louis-deniot.jpg", 
    "https://admin.deniot.com/app/uploads/2020/07/living-room_1_touraine_jean-louis-deniot.jpg", 
    "https://admin.deniot.com/app/uploads/2022/01/living-room_15bis_eaton-square-_london_jean-louis-deniot.jpg", 
    "https://admin.deniot.com/app/uploads/2020/07/living-room_10_south-beach-loft_miami_jean-louis-deniot.jpg" 
  ];

  useEffect(() => {
    const img = imgRef.current;
    const text = textRef.current;
    let currentImageIndex = 0;

    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth <= 991);
    };
    

    checkScreenWidth();

    imageUrls.forEach(url => {
      const imgPreload = new Image();
      imgPreload.src = url;
    });

    gsap.set(img, {
      scale: 0.3,
      xPercent: -50,
      yPercent: -50,
      top: "50%",
      left: "50%",
      position: "fixed",
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      transformOrigin: "center center",
    });

    gsap.set(text, { color: '#fff', opacity: 1 });
    
    const changeImage = () => {
      gsap.to(img, {
        duration: 2,
        onComplete: () => {
          currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
          img.src = imageUrls[currentImageIndex];
          gsap.to(img, { duration: 2 });
        },
      });
      
    };

    let scrollTrigger;
    if (!isSmallScreen) {
      scrollTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: "#trigger-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      scrollTrigger.to(img, {
        scale: 1,
        ease: "power1.inOut",
      })
      .to(text, {
        opacity: 1,
        color: '#fff',
        ease: "power1.in",
      });
    }
   

  
    const imageChangeInterval = setInterval(changeImage, 1500);

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      if (scrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      clearInterval(imageChangeInterval);
      window.removeEventListener('resize', checkScreenWidth);
    };

  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div>
          <div className="" id="trigger-section" style={{ height: "100vh", position: "relative" }}>
            <img
              ref={imgRef}
              src={imageUrls[0]} 
              alt="Living Room"
              className="h-full object-cover"
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60%",
                textAlign: "center",
              }}
            >
              <h2 className="text-white">Design your life and dreams</h2>
            </div>
          </div>
        </div>
      ) : (
        <div id="trigger-section" className="" style={{ height: "100vh", position: "relative" }}>
          <img
            id="img"
            ref={imgRef}
            src={imageUrls[0]} 
            alt="Living Room"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              textAlign: "center",
            }}
          >
            <h2 ref={textRef}>Design your life and dreams</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageAnim;
