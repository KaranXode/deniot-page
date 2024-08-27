'use client'
import React, { useEffect, useState } from 'react';

const Circlecursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="dot-cursor"
      style={{
        top:`${position.y}px`,left:`${position.x}px`,
      }}
    />
  );
};

export default Circlecursor;
