import React from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { WiMoonAltNew } from "react-icons/wi";
import { TbLetterX } from "react-icons/tb";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slice';
import { FaRegMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavItems({ items, show ,name , toggleTheme }) {
  const dispatch = useDispatch();

  const { blogs, theme } = useSelector(state => state.blogs);

  return (
    <>
      <ul className={`flex gap-5 items-center flex-col h-screen pt-23 ${theme === 'dark' ? 'bg-mysecondary text-white' : 'bg-white text-mysecondary'} md:pt-0 lg:pt-0 md:justify-end md:h-14 md:flex-row lg:flex-row lg:justify-end lg:h-14`}>
        <h1 className={`text-xl font-normal block ${theme === 'dark' ? 'text-white' : 'text-my-primary'} md:hidden lg:hidden`}>{name}</h1>
        {items?.map((element, index) => (
          <li onClick={() => show(prev => !prev)} className={`text-xl font-normal`} key={index}>
            <Link to={`${element?.id}`}>{element.name}</Link>
          </li>
        ))}

        <button className={`flex justify-evenly items-center w-24 h-10	rounded-xl3.5 ${theme === 'dark' ? 'bg-white text-black' : 'bg-mysecondary text-white'}`}  onClick={() => dispatch(toggleTheme())}>
            <IoSunnyOutline className={` ${theme === 'dark' ? 'hidden' : 'block'}  w-6 h-6`} />

            <WiMoonAltNew className = 'w-6 h-6 z-10 ' /> 

            <FaRegMoon className={` ${theme === 'dark' ? 'block' : 'hidden'}  w-6 h-6`} />


        </button>
        
        <TbLetterX onClick={() => show(prev => !prev)} className='w-8 absolute block md:hidden lg:hidden bottom-5' />
      </ul>
    </>
  );
}