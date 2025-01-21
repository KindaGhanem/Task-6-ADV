import React from 'react'
import Hero from '../component/Hero'
import RecentBlog from '../component/RecentBlog'
import AllBlogs from '../component/AllBlogs'


export default function Home() {



  return (
    <>
    <Hero heroTitle={'THE BLOG'} />
    <RecentBlog title={'Recent blog posts'} />
    <AllBlogs title={'All blog posts'} />


   </>
  )
}
