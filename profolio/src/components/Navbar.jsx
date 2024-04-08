import React from 'react'
import 'animate.css';
import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
    const slide = (e) => {
      const nav = document.querySelector('nav ul');
      nav.classList.toggle('block');
      const icon = document.querySelector('.text-4xl');
      if (nav.classList.contains('block')) {
        nav.style.display = 'block';
        nav.style.flexDirection = 'column';
        
        nav.style.display = 'flex';
        nav.style.alignItems = 'center';
        nav.style.width="100%";
      }
      else {
          nav.style.display = 'none';
      } 

      useEffect(() => {
        const navItems = document.querySelectorAll('nav ul li');
        navItems.forEach(item => item.addEventListener('click', slide));
        return () => {
          navItems.forEach(item => item.removeEventListener('click', slide));
        }
      }, []);
         
    }

  return (
    
  <nav className="w-full h-70 lg:h-55  top-0 mb-10 sticky text-white flex md:flex lg:flex md:justify-between  lg:justify-between px-4 md:px-4 justify-start">
    <div className="text-2xl p-2 text-indigo-300  animate__animated animate__shakeY font-bold text-start hidden lg:inline md:inline">  KARAN'S PROTFOLIO </div>

    <div className=" md:hidden lg:hidden ">
      <a className="text-4xl"  onClick={slide} href="#">
        &#8801;
      </a>   
    </div>

    <br className='lg:hidden md:hidden'/>
   <ul className="md:flex  font-bold hidden float-right top-[9%] text-1xl ">
      <li className="mx-[10px] cursor-pointer   hover:bg-white hover:text-black ease-in-out rounded m-2 p-2 "><a href="#home">Home</a></li>
      <li className="mx-[10px] cursor-pointer   hover:bg-white hover:text-black ease-in-out rounded m-2 p-2"><a href="#projects">Projects</a></li>
      <li className="mx-[10px] cursor-pointer   hover:bg-white hover:text-black ease-in-out rounded m-2 p-2"><a href="#skill">Skills</a></li>
      <li className="mx-[10px] cursor-pointer   hover:bg-white hover:text-black ease-in-out rounded m-2 p-2"><a href="#myvision">My Vision</a></li>
      <li className="mx-[10px] cursor-pointer   hover:bg-white hover:text-black ease-in-out rounded m-2 p-2"><a href="#contact">Contact</a></li>
    </ul>


  </nav> 

    
  )
}

export default Navbar
