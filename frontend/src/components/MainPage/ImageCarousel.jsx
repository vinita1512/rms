import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <div className="container">
      <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image.src} 
              alt={image.alt} 
              style={{ maxHeight: '550px' }} // Set maximum height here
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
