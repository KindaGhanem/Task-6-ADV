import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogCards from '../component/BlogCards';
import MainTitle from '../component/MainTitle';
import StoriesComponent from '../component/StoriesComponent';
import DetailCard from '../component/DetailCard';
import { selectRandomBlogs } from '../redux/slice';

export default function Details() {
    const blogs = useSelector((state) => state.blogs.blogs);
    const { id } = useParams();

    const blog = blogs.find((i)=>i.id == id)
    

    // const filteredBlogs = blogs.filter(blog => blog.id !== id);
    // const randomBlogs = filteredBlogs.sort(() => 0.5 - Math.random()).slice(0, 9);


    const randomBlogs = useSelector((state) => selectRandomBlogs(state, id));

    const { theme } = useSelector(state => state.blogs);


    return (
        <section className=' px-5 pt-36 lg:px-28'>
        <div className={`w-full max-w-110 ${theme === 'dark' ? 'bg-mysecondary ' : 'bg-white '} `}>
        <div className=' w-full flex justify-between flex-wrap md:flex-nowrap gap-4 md:gap-8'>
            <div className=" w-full max-w-screen-sm md:w-full md:max-w-83 flex flex-col gap-y-8 ">
            <MainTitle title='Recent blog posts' />
                   {randomBlogs.map((blog) => (
                        <div className="w-full max-w-screen-sm md:w-full md:max-w-83" key={blog.id}>
                            <BlogCards blog={blog} first={'first'} side={'side'}  />
                        </div>
                    ))}
            </div>
            <div className='w-full max-w-screen-sm md:w-full md:max-w-105 '>
                <p className='text-mypurble text-sm font-semibold mb-8 '>  {blog.date} </p>
                <h4 className= {`font-bold text-4xl mb-8 ${theme === 'dark' ? 'text-white' : 'text-myprimary'}  `}>{blog.title}</h4>
                <img className='w-full' src={blog.img} alt =''></img>
                <p className={` font-normal	text-mythird text-base mb-3 `} >{blog.desc}</p>
            <DetailCard />
              <div className='flex gap-2'>
                <button className={`  text-mypurble bg-mysix rounded-2xl py-0.5 px-2.5 `}>{blog.btn1}</button>
                <button className={` text-myfifth   bg-mysix rounded-2xl	`}>{blog.btn2}</button>
              </div>
            </div>
        </div>
        <StoriesComponent pagetitle={'Newlatters'} title={'Stories and interviews'} desc='Subscribe to learn about new product features, the latest in technology, solutions, and updates.' holder='Enter your email' valueBtn='Subscribe' text='We care about your data in our ' linkEmail='privacy policy' details='details' />


        </div>
        </section>


    );
}
