import React from 'react'
import { useSelector } from 'react-redux';

export default function StoriesComponent({pagetitle ,title , desc , holder , valueBtn , text ,  linkEmail  ,details }) {


  const { blogs, theme } = useSelector(state => state.blogs);

  return (
    <div className= {` flex flex-col justify-center items-center ${details ? ' w-full max-w-105 ms-auto ' : ''  }`}>
        <h5 className='text-base text-center font-semibold text-active pt-8 pb-3 ' >{pagetitle}</h5>
        <h1 className={` ${theme === 'dark' ? 'text-white ' : 'text-text-myprimary '}   font-semibold  text-5xl text-center`}>{title}</h1>
        <p className='text-center text-mythird text-xl font-normal pt-6 pb-10 '>{desc}</p>
        <form className=' flex flex-wrap md:flex-nowrap gap-4 m-auto'>
            <input className='w-85 h-12 text-base text-mythird border border-solid rounded-lg  border-inputborder ' type='email' placeholder={holder}></input>
            <input className='h-12 w-29 bg-active rounded-lg py-3 px-5 text-white  ' type='submit' value={valueBtn}></input>
        </form>
        <p className='text-sm font-normal text-mythird pt-2 pb-7 '>
            {text}
            <a href='#' className='text-mythird'>{linkEmail}</a>
        </p>
    </div>
  )
}





