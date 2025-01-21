import React, { useEffect } from 'react';
import MainTitle from './MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import BlogCards from './BlogCards';
import { setCurrentPage, setItemsPerPage } from '../redux/slice';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export default function AllBlogs({ title }) {
    const dispatch = useDispatch();
    const { blogs, currentPage, itemsPerPage , theme } = useSelector(state => state.blogs);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const currentItems = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageClick = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    return (
        <div className={`px-5 lg:px-28 ${theme === 'dark' ? 'bg-mysecondary' : 'bg-white'}`}>
            <MainTitle title={title} />
            <div className='flex justify-between items-center gap-y-12 flex-wrap w-full'>
                {currentItems.map((blog, index) => (
                    <div className='w-full md:max-w-[360px] xl:w-0.5/5 gap-4 '>
                        <BlogCards key={index} blog={blog} first={'first'} all={'all'} hiddenbtn='hiddenbtn' AllBlogHigh='AllBlogHigh' />
                    </div>
                ))}
            </div>
            <div className=" py-23 sm:py-8 flex justify-center items-center md:justify-between w-full flex-col md:flex-row">
                <button className='w-20 h-5 text-mythird flex gap-2 ' onClick={handlePrev} disabled={currentPage === 1}> <FaArrowLeft /> Previos</button>
                <div className='flex gap-1.5'>
                    {Array.from({ length: totalPages }, (_, index) => {
                        const pageNumber = index + 1;
                        if (pageNumber <= 3 || pageNumber > totalPages - 1 || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
                            return (
                                <button
                                    key={pageNumber} 
                                    onClick={() => handlePageClick(pageNumber)} 
                                    className={`${currentPage === pageNumber ? 'text-active bg-mysix' : 'text-mythird'} w-10 h-10 text-sm rounded-lg`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        }
                        if (pageNumber === 4 && currentPage > 4) {
                            return <button className='w-10 h-10 text-sm rounded-lg' key={pageNumber}>...</button>;
                        }
                        if (pageNumber === totalPages - 1 && currentPage < totalPages - 3) {
                            return <button className='w-10 h-10 text-sm rounded-lg' key={pageNumber}>...</button>;
                        }
                        return null;
                    })}
                </div>
                <button className='w-20 h-5 text-mythird flex gap-2' onClick={handleNext} disabled={currentPage === totalPages}> <FaArrowRight /> Next</button>
            </div>
        </div>
    );
}
