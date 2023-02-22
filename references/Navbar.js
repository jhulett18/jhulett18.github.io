import React, { useRef } from 'react'
import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from'react-icons/ai'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  // TODO: Find a way to inject HTML <script> tags
  
  return (
    <div>


      <header>
        <h3 class="logo">Internationally U</h3>
        
         <nav class="nav-bar" ref={navRef}>
          <a href="/#">Contact</a>
          <a href="/#">About</a>
          <a href="/#">Look Book</a>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>


        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaBars/>
        </button>
      </header> 
    </div> 
  )
}

export default Navbar


{/* <div class='relative z-10 bg-gray-900 bg-opacity-80 shadow-lg'>
<nav class="relative flex items-center justify-between w-full max-w-screen-xl px-5 mx-auto text-white lg:px-2 lg:shadow-none">
navbar
<button class="z-10 w-10 sm:w-12 md:w-15  opacity-90 focus:outline-none">
    navbar
    <img src="../icon-test.png" alt="icon test" /> 
  </button>
  {/* <div class="absolute inset-0 z-0 block w-full h-full shadow-md opacity-50 lg:hidden">
    navbar
  </div> */}
  {/* <button class="z-10 w-10 sm:w-12 md:w-15 lg:hidden opacity-90 focus:outline-none">
    <img src="../../public/images/icon-test.png" alt="icon test" /> 
  </button> */}
  
// </nav>
// </div> */}






// // Store Name
// <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
// <h1  id="font" className='w-full text-3xl font-bold text-[#2eafd1]'>Internationally U</h1>
// <ul className='hidden md:flex'>
//   <li id="font" className='p-4 text-white'>Home</li>
//   <li id="font" className='p-4 text-white'>About</li>
//   {/* <li className='p-4'>Resources</li>
//   <li className='p-4'>About</li>
//   <li className='p-4'>Contact</li> */}
// </ul>
// <div onClick={handleNav} className='block md:hidden'>
//   {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
// </div>
// <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
// <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>More</h1>
//   <li className='p-4 border-b border-gray-600'>Home</li>
//   <li className='p-4 border-b border-gray-600'>About</li>
//   {/* <li className='p-4 border-b border-gray-600'></li> */}
//   {/* <li className='p-4 border-b border-gray-600'>Resources</li> */}
//   {/* <li className='p-4 border-b border-gray-600'>About</li> */}
//   {/* <li className='p-4'>Contact</li> */} 