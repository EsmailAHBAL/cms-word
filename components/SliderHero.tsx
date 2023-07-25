import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['With', 'Smart mini car', 'Discover', 'Drive', 'Delight']
function Hero() {
 const [index, setIndex] = React.useState(0);
 React.useEffect(() => {
  const intervalId = setInterval(
    () => setIndex((index) => index + 1),
    3000, // every 3 seconds
  );
  return () => clearTimeout(intervalId);
}, []);
  const slides = [
   {
    url: '/car1.jpg',
  },   {
   url: '/car3.jpg',
 },
 {
  url: '/car4.jpg',
},
{
 url: '/car2.jpg',
},


  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1200px] h-[64vh] lg:h-[80vh]  w-full m-auto py-2 px-4 relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover p-2 duration-500 opacity-60 flex justify-center items-center text-white"
      >
       <div className="w-[80%]  text-xl">
        <p className="font-extrabold py-3 text-sm md:text-lg">
          {' '}
          Discover the world of speed and style on our exceptional auto and moto hub.
        </p>
     <div className="font-extrabold py-2 pl-3 md:py-4">
     <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
     </div>

        <div className="w-full text-center pt-4">
          <button className="bg-black/50 text-white rounded-s-lg font-extrabold   px-7 py-2 text-sm ">
            Unleash Your Drive{' '}
          </button>
        </div>
      </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
