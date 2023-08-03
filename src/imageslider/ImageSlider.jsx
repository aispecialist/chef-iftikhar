import React from 'react';
import Slider from 'react-slick';

// Import the CSS files for slick carousel and bootstrap
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-slide">
            <img src={image} alt={`Slide ${index + 1}`} className="img-fluid m-2 p-2 imgl1" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;