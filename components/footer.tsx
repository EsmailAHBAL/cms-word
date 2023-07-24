import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Link from 'next/link';
const TEXTS = ['Smart', 'Mini', 'Car', 'Smart Min Car']


export default function Footer() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
   const intervalId = setInterval(
     () => setIndex((index) => index + 1),
     3000, // every 3 seconds
   );
   return () => clearTimeout(intervalId);
 }, []);
  return (
    <footer className=" border-t border-accent-2  bg-black text-white mt-3 py-4">
      <Container>
      <div className="w-full flex  justify-center items-center py-4">
      <div className="font-extrabold text-lg">
     <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
     </div>
      </div>
      <div className="w-full flex justify-center items-center ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-4  text-center gap-x-4 text-lg">
            <Link  href ="/contact"className="text-white">About us</Link>
            <Link  href ="/contact"className="text-white">Contact us</Link>
            <Link  href ="/terms" className="text-white">Terms of use</Link>
            <Link href ="/privacy" className="text-white">Privacy Policy</Link>
          </div>
         <div className=" text-center">
         <p className="md:pl-10 py-2 text-sm">©Smartminicart.com 2023</p>
          <p className="md:pl-10  text-sm">© All Rights Reserved.</p>
         </div>
        </div>
      </div>
      </Container>
    </footer>
  )
}
