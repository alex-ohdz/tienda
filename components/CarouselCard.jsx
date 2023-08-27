"use client"
import React, { useState } from 'react';
import { Card, Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const CardCarousel = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 4, cards.length - 1));
  };

  return (
    <div className="card-carousel">
      <div className="card-slider" style={{ transform: `translateX(-${activeIndex * 110}px)` }}>
        {cards.map((card, index) => (
          <Card key={index} className="carousel-card">
            <CardMedia
              component="img"
              image={card.imageUrl}
              alt={`Image ${index + 1}`}
            />
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="carousel-button prev" onClick={handlePrev} disabled={activeIndex === 0}>
        <ChevronLeft />
      </Button>
      <Button className="carousel-button next" onClick={handleNext} disabled={activeIndex === cards.length - 1}>
        <ChevronRight />
      </Button>
    </div>
  );
};

export default CardCarousel;
