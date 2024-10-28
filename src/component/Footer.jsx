import React from 'react'
import { useSelector } from 'react-redux';

export default function Footer({ date ,linkk1 , linkk2 , linkk3 , linkk4 , linkk5  }) {

  const {theme} = useSelector(state => state.blogs);


  return (
    <div className={` py-8 flex gap-6.5 flex-col md:flex-row justify-center items-center md:justify-start md:items-start md:text-xl px-5 lg:px-28 font-normal ${theme === 'dark' ? 'bg-mysecondary text-white' : ' bg-white text-myprimary'}`}>
        <p>{date}</p>
        <ul className='flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-6.5'>
            <li className='list-none'><a href='#'>{linkk1}</a></li>
            <li className='list-none'><a href='#'>{linkk2}</a></li>
            <li className='list-none'><a href='#'>{linkk3}</a></li>
            <li className='list-none'><a href='#'>{linkk4}</a></li> 
            <li className='list-none'><a href='#'>{linkk5}</a></li>
        </ul>
    </div>
  )
}
