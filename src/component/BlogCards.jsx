import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function BlogCards({ blog , first , right ,under , all ,side , hiddenbtn , AllBlogHigh }) {

  const navigate = useNavigate();

  const handleCardClick = () => {
      navigate(`/details/${blog.id}`);
  };

  const { theme } = useSelector(state => state.blogs);

  return (
        <div  onClick={handleCardClick} className= {` ${AllBlogHigh ? ' h-[500px]' : ''}${side ? ' w-full max-w-screen-sm md:w-full md:max-w-83 flex flex-col ' : ''}
         ${right ? 'flex justify-between gap-6 flex-wrap lg:flex-nowrap' : ''}
         ${under ? 'flex justify-between gap-8 pt-14 pb-8 flex-wrap lg:flex-nowrap w-full ' : ''} `}>
            <img className= {` w-full object-cover ${first ? 'mb-8 ' : ''} ${under ? ' w-full max-w-100 lg:w-2.5/5' : ''} `} src={blog.img} alt={''} ></img>
            <div className= {` w-full ${under ? ' lg:w-2.5/5' : ''} ${right ? 'w-72' : ''} `}>
              <div className="flex">
                <span  className= {`text-mypurble text-sm	font-semibold ${first ? 'mb-3 ' : ''} ${right ? ' pb-3  ' : ''} `}>{blog.writer}</span>
                <span className= {`text-mypurble text-sm	font-semibold ${first ? 'mb-3 ' : ''} ${right ? ' pb-3  ' : ''} `}>{blog.date}</span>
              </div>
                <div className={`flex justify-between items-center  ${theme === 'dark' ? 'text-white' : 'text-myprimary'}`}>
                  <h4 className= {`font-semibold ${first ? ' text-base xl:text-2xl mb-3 ' : ''} ${right ? 'text-lg' : ''} ${under ? ' text-base xl:text-2xl py-3' : ''} `}>{blog.title}</h4>
                  {blog.icon}
                </div>
                <p className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-sm xl:text-base ${first ? 'mb-6 ' : ''} ${under ? 'pb-6' : ''} ${right ? 'w-72 pt-2 pb-6 h-full max-h-28	' : ''} `} >{blog.desc}</p>
                <div className="flex gap-2">
                    <button className={` ${first ? ' text-mypurble ' : ''} ${right ? 'text-myfourth' : ''}  bg-mysix rounded-2xl !py-0.5 !px-2.5	 `}>{blog.btn1}</button>
                    <button className={` ${first ? '  text-myfourth !py-0.5 !px-2.5 ' : ''} ${under ? "text-myfifth !py-0.5 !px-2.5" : ''}  bg-mysix rounded-2xl !py-0.5 !px-2.5	`}>{blog.btn2}</button>
                    <button className={`text-myfifth  !py-0.5 !px-2.5 bg-mysix rounded-2xl ${right ? 'hidden' : ''} ${under ? 'hidden' : ''} ${hiddenbtn ? 'hidden' : ''} `} >{blog.btn3}</button>
                </div>
            </div>
        </div>
  )
}