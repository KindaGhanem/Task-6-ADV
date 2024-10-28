import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailCard() {

    const blogs = useSelector((state) => state.blogs.blogs);

    const { id } = useParams();

    const blog = blogs.find((i)=>i.id == id)
    
    const { theme } = useSelector(state => state.blogs);



  return (
    <div className={`flex flex-col `} >
    {blog?.parts?.map((part, index) => (
    <div key={index}>
        <p className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.par1}</p>
        <p  className={` font-normal	text-mythird text-base mb-3 `} >{part.par2}</p>
        <p  className={` font-bold text-center	text-mythird text-base mb-3 `} >{part.Difinition1}</p>
        <img src={part.img11} alt={part.Ex}></img>
        <p className={` font-normal text-center	text-mythird text-base mb-3 `}>{part.Difinition2}</p>
        <p  className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par3}</p>
        <p  className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par4}</p>
        <p  className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par5}</p>
        <p  className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par6}</p>
        <h3  className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-lg mb-3 `}>{part.subtitle1}</h3>
        <p  className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par7}</p>
        <p  className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par8}</p>
        <p  className={` font-normal	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.pa95}</p>
        <img src={part.img22} alt={part.Ex}></img>
        <h4  className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-lg mb-3 `}>{part.Ex}</h4>
        <h5  className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.Exam1}</h5>
        <h5 className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.Exam11}</h5>
        <p className={` font-bold text-center	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.par10}</p>
        <img src={part.img33} alt={part.Ex}></img>
        <p className={` font-bold text-center	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.descimg}</p>
        <h5 className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.Exam2}</h5>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.par11}</p>
        <img src={part.img44} alt={part.Ex}></img>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.descimg44}</p>
        <h5 className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.Exam3}</h5>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.par12}</p>
        <img src={part.img55} alt={part.Ex}></img>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.descimg55}</p>
        <h5 className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.Exam4}</h5>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `} >{part.par13}</p>
        <img src={part.img66} alt={part.Ex}></img>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}> {part.descimg66}</p>
        <h3 className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-lg mb-3`}>{part.subtitle2}</h3>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par14}</p>
        <img src={part.img77} alt={part.Ex}></img>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.descimg77}</p>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par15}</p>
        <h3 className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-lg mb-3`}>{part.subtitle3}</h3>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par16}</p>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par17}</p>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par18}</p>
        <img src={part.img88} alt={part.Ex}></img>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.descimg88}</p>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par19}</p>
        <img src={part.img99} alt={part.Ex}></img>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.descimg99}</p>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par20}</p>
        <h3 className={` font-bold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-lg mb-3`}>{part.subtitle4}</h3>
        <p className={` font-semibold	${theme === 'dark' ? 'text-darkfont ' : 'text-mythird '} text-base mb-3 `}>{part.par21}</p>
    </div>
    ))}
</div>
  )
}
