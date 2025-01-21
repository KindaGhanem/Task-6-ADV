import { useSelector } from "react-redux";
import BlogCards from "./BlogCards";
import MainTitle from "./MainTitle";
import { selectLastFourBlogs } from "../redux/slice";


export default function RecentBlog({title}) {



const {theme} = useSelector((state) => state.blogs);
const blogs = useSelector(selectLastFourBlogs); 



  return (
    <>
        <div className={`px-5 lg:px-28  w-full ${theme === 'dark' ? 'bg-mysecondary' : 'bg-white'}`}>
            <MainTitle title={title} />
            <div className="flex-col max-w-120">
                <div className='flex justify-between gap-8  w-full flex-wrap lg:flex-nowrap'>
                    <div className="w-full max-w-5xl lg:w-2.5/5">
                        {blogs.length > 0 && (
                            <BlogCards key={blogs[0].id} blog={blogs[0]} first={'first'}  />
                        )}
                    </div>
                    <div className="w-full max-w-5xl flex flex-col gap-8 lg:w-2.5/5">
                        {blogs.slice(1,3).map((blog, index) => (
                            <div className="w-full !max-w-5xl lg:w-2.5/5" key={blog.id}>
                                <BlogCards blog={blog} right={'right'} />
                            </div>
                        ))}
                    </div>
                </div>
                    <div className=" w-full">
                         {blogs.slice(3).map((blog, index) => {
                                return <BlogCards key={blog.id} blog={blog} under={'under'} />;
                            }
                        )}
                    </div>
            </div>
        </div>


    </>
  )
}