// // import React, { useState } from 'react'
// // import NavItems from './NavItems'
// // import { IoMenu } from "react-icons/io5";


// // export default function NavBar({name , items , btn}) {
// //     const [active, setactive] = useState(false)

// //     function openMenu(){
// //         setactive(prev => !prev)
// //     }

// // //       const [darkMode ,setDarkmode ] = useState(false)

// // //   function toggleDarkMod (){
// // //     setDarkmode(!darkMode)
// // //   }

// // const [theme , setTheme] = useState("light")

// // useEffect(() => {
// //   if (theme === 'dark'){
// //     document.documentElement.classList.add('dark')
// //   }

// // }, [theme])

// // // const handleThemeSwitch = () =>{
// // //  setTheme(theme === 'dark' ? 'light' : 'dark')
// // // }


// //   return (
// //     <>
// //         <nav className= {` dark:bg-black flex justify-between items-center px-5 fixed w-full  h-23 bg-white  lg:px-28 `} >
// //             <h1 className='text-xl font-semibold text-black  dark:text-white '>{name}</h1>

// //             <div className='hidden md:flex lg:flex justify-between w-63  dark:text-white' >
// //                 < NavItems items={items} darkMode={setTheme} />
                
// //             </div>
// //             <button className='block sm:block md:hidden lg:hidden  dark:text-white' onClick={openMenu} >
// //                 <IoMenu className='w-8' />
// //         </button>
// //         </nav>

// //         <div className= {` block px-0 fixed w-full md:hidden lg:hidden  dark:text-white ${(active) ? 'translate-x-0' : '-translate-x-full'} transition-all duration-1000`}	>
// //             <NavItems items={items} btn={btn} name={name} show={setactive} />
// //         </div>
// //     </>
// //   )
// // }





// import React, { useState, useEffect } from 'react';
// import NavItems from './NavItems';
// import { IoMenu } from "react-icons/io5";

// export default function NavBar({ name, items }) {
//   const [active, setActive] = useState(false);
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   function openMenu() {
//     setActive(prev => !prev);
//   }

//   return (
//     <>
//       <nav className={`flex justify-between items-center px-5 fixed w-full h-23 dark:bg-black ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} lg:px-28`}>
//         <h1 className='text-xl font-semibold'>{name}</h1>

//         <div className='hidden md:flex lg:flex justify-between w-63'>
//           <NavItems items={items} show={setActive} darkMode={setTheme} />
//         </div>
        
//         <button className='block sm:block md:hidden lg:hidden' onClick={openMenu}>
//           <IoMenu className='w-8' />
//         </button>
//       </nav>

//       <div className={`block px-0 fixed w-full md:hidden lg:hidden ${active ? 'translate-x-0' : '-translate-x-full'} ${theme === 'dark' ? 'text-white' : ''}`}>
//         <NavItems items={items} show={setActive} darkMode={setTheme} />
//       </div>
//     </>
//   );
// }











import React, { useState } from 'react';
import NavItems from './NavItems';
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slice';


export default function NavBar({ name, items }) {
  const [active, setActive] = useState(false);

  const { blogs, theme } = useSelector(state => state.blogs);

  function openMenu() {
    setActive(prev => !prev);
  }

  return (
    <>
      <nav className={`flex justify-between items-center px-5 lg:px-28 fixed w-full h-23 ${theme === 'dark' ? 'bg-mysecondary text-white' : 'bg-white text-mysecondary'} `}>
        <h1 className='text-xl font-semibold'>{name}</h1>

        <div className='hidden md:flex lg:flex justify-between w-63'>
          <NavItems items={items} show={setActive} toggleTheme={toggleTheme} />
        </div>
        
        <button className='block sm:block md:hidden lg:hidden' onClick={openMenu}>
          <IoMenu className='w-8' />
        </button>
      </nav>

      <div className={`block px-0 fixed w-full md:hidden lg:hidden ${active ? 'translate-x-0' : '-translate-x-full'} ${theme === 'dark' ? 'text-white' : ''}`}>
        <NavItems items={items} show={setActive}name={name} toggleTheme={toggleTheme} />
      </div>
    </>
  );
}