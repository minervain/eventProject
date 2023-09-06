import React, { useState } from 'react';

function Slider({ data }) {
  const images = [
    data.KucukAfis,
    data.Resim2,
    data.Resim3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  // Sabit boyutlar
  const imageWidth = 600;
  const imageHeight = 450;

  const imageStyle = {
    width: `${imageWidth}px`, // Genişlik sabit olarak ayarlandı
    height: `${imageHeight}px`, // Yükseklik sabit olarak ayarlandı
    objectFit: 'cover', // Resimlerin boyutlarına sığacak şekilde ayarlandı ve taşmaları önleniyor
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
      >
        {'<'}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
      >
        {'>'}
      </button>
      <img
        src={images[currentImage]}
        alt="Slider Image"
        style={imageStyle}
      />
    </div>
  );
}

export default Slider;
