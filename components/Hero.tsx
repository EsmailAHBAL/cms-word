import React from "react";
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['With', 'Smartminicar', 'Discover', 'Drive', 'Delight']

const Hero = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div
      className="  bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]
      border-8
      bg-cover
      bg-center
      relative
      bg-no-repeat
      bg-blend-overlay bg-black/50
     text-white
    rounded-3xl
    border-white w-full h-[10vh] flex justify-center items-center "
    >
      <div className="w-[80%]  text-xl">
        <p className="font-extrabold py-3 md:text-lg">
          {' '}
          Discover the world of speed and style on our exceptional auto and moto hub.
        </p>
        <div className="font-extrabold">
          <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>

        <div className="w-full text-center pt-4">
          <button className="bg-black/50 text-white rounded-s-lg font-extrabold   px-7 py-2 text-sm ">
            Unleash Your Drive{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
