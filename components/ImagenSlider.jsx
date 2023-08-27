"use client";

import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import Pagination from "@mui/material/Pagination";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(1);
  const length = slides.length;

  const handlePageChange = (event, value) => {
    setCurrent(value);
  };

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      SliderData.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {SliderData.map((slide, index) => (
        <div
          className={index === current - 1 ? "slide active" : "slide"}
          key={index}
        >
          {index === current - 1 && (
            <img src={slide.image} alt="travel image" className="image" />
          )}
        </div>
      ))}

      <Pagination
        count={length}
        page={current}
        onChange={handlePageChange}
        size="small"
        className="paginar"
      />
    </section>
  );
};

export default ImageSlider;