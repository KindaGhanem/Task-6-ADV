import React from 'react'
import StoriesComponent from '../component/StoriesComponent'
import BlogCards from '../component/BlogCards'
import { useSelector } from 'react-redux';
import { selectFirstThreeBlogs } from '../redux/slice';

export default function NewsLetter() {


  const firstThreeBlogs = useSelector(selectFirstThreeBlogs);

  
  const { theme } = useSelector(state => state.blogs);


  return (
    <div className= { `px-5 lg:px-28 pt-36 ${theme === 'dark' ? 'bg-mysecondary ' : 'bg-white'}`} >
         <StoriesComponent pagetitle={'Newlatters'} title={'Stories and interviews'} desc='Subscribe to learn about new product features, the latest in technology, solutions, and updates.' holder='Enter your email' valueBtn='Subscribe' text='We care about your data in our ' linkEmail='privacy policy' />

         <div className='flex justify-between items-center flex-wrap gap-y-12 pt-14 w-full max-w-110 '>
            {firstThreeBlogs.map((blog, index) => (
              <div className={index === 2 ? 'w-full max-w-100 xl:w-0.5/5' : 'w-full md:max-w-82 xl:w-0.5/5'}>
                <BlogCards key={index} blog={blog} first={'first'} />
              </div>
            ))}
          </div>

    </div>
  )             
}
