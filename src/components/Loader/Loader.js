'use client';
import React, { useEffect } from "react";
import "./Loader.css";

export default function Loader() {
  useEffect(() => {
    const loaderCircles = document.querySelectorAll(".loader-circle");
    const radius = 30;

    loaderCircles.forEach((circle, index) => {
      const angle = (index * 360) / loaderCircles.length; 
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);

      circle.style.transform = `translate(${x}px, ${y}px)`;
      
    });
  }, []);

  return (
    <div className="loader-container">
      <img src="/media/loader.png" alt="Loader" />
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="loader-circle"></div>
      ))}
    </div>
  );
}
