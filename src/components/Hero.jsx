"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1683122078789-ba16224c7760?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Welcome to our Store.",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1676057875116-159f2ef046b8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Discover Amazing Deals.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1558234200-3efd43232f08?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Find your favorite products.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1533922922960-9fceb9ef4733?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Unlimited Categories and many more.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen bg-red-200 overflow-hidden">
      <div 
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{transform: `translateX(-${currentSlide * 100}%)`}}
        
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black bg-opacity-20 h-full flex items-center justify-center ">
              <h1 className="text-4xl font-bold text-white">{slide.text}</h1>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-5 hover:bg-blue-600 "
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-5 hover:bg-blue-600 "
      >
        &gt;
      </button>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>

    // <div className="bg-gray-200 py-20 text-center h-full">
    //     <h1 className="text-4xl font-bold" >Welcome to our Store</h1>
    //     <p className="mt-4 text-lg" >Discover the best products here!</p>
    // </div>
  );
};

export default Hero;
