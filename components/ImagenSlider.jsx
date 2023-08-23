'use client'

import React, { useState } from 'react';
import { SliderData } from './SliderData';
import Pagination from '@mui/material/Pagination';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(1);
  const length = slides.length;
  
  const handlePageChange = (event, value) => {
    setCurrent(value);
  }

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current - 1 ? 'slide active' : 'slide'}
            key={index}>
            {index === current - 1 && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
              
          </div>
          
        );
      })}
      <Pagination 
              count={length} 
              page={current}
              onChange={handlePageChange}
               size="small" 
               className='paginar'/>
    </section>
  );
};

export default ImageSlider;