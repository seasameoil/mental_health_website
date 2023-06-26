import React, { useState } from "react";
import { useEffect } from "react";
import './imageSlider.css'

export default function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3초 간격으로 이미지 전환

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
        <div style={{padding: '0px 60px', display: 'flex', justifyContent: 'center'}}>
            <button className="nextBtn" onClick={handlePrevious}>&lt;</button>
            <div>
                <img src={images[currentImageIndex]} alt="slide" style={{width: '100%', height: 'auto'}} />
            </div>
            <button className="nextBtn" onClick={handleNext}>&gt;</button>
        </div>
    </div>
  );
};
