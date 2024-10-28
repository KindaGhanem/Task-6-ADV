import React from 'react'
import { useSelector } from 'react-redux';

export default function Hero({heroTitle}) {

  const { theme } = useSelector(state => state.blogs);





  return (
    <div className={`h-screen w-full flex justify-center items-center ${theme === 'dark' ? 'bg-mysecondary text-white' : 'bg-white text-myprimary'}`}>
      <h1 className={` font-bold text-7xl border-y border-solid border-myborders  ${theme === 'dark' ? 'border-white' : 'border-myprimary'} text-center lg:text-10xl xl:text-110xl`}>
        {heroTitle}
      </h1>
    </div>
  );
}