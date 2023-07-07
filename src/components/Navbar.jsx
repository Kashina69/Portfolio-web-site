import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// import { useRouter } from 'next/router';
// import NavLogo from '../navLogo.png'
let navBg = "#ecf0f3";
let linkColor = "#1f2937";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="navbar"
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full bg-transparent h-14 bg-blue-400 shadow-lg z-[100] ease-in-out duration-300 opacity-80 hover:opacity-100"
          : "fixed w-full h-14 z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 mt-3">
        <a href="/">
          {/* <img
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            /> */}
          <div className="flex md:ml-5 pb-6 ">
            <h1 className="text-[#5651e5] ml-3 font-serif">P</h1>
            <h2 className="text-purple-600 sm:text-5xl sm:mt-[1.5px] md:mt-[11px] mt-[4.8px] font-serif">
              r
            </h2>
          </div>
        </a>
        <div>
          <ul className="hidden md:flex md:mb-9 md:mr-6">
          <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
            <a
              className="group text-[#5651e5] transition-all duration-300 pb-2 ease-in-out"
              href="#home"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-[#5651e5] to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Home
              </span>
            </a>
            </li>
            <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
            <a
              className="group text-[#5651e5] transition-all duration-300 pb-2 ease-in-out"
              href="#about"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-[#5651e5] to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </span>
            </a>
            </li>
            <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
            <a
              className="group text-[#5651e5] transition-all duration-300 pb-2 ease-in-out"
              href="#skills"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-[#5651e5] to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Skills
              </span>
            </a>
            </li>
            <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
            <a
              className="group text-[#5651e5] transition-all duration-300 pb-2 ease-in-out"
              href="#projects"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-[#5651e5] to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Projects
              </span>
            </a>
            </li>
            <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
            <a
              className="group text-[#5651e5] transition-all duration-300 pb-2 ease-in-out"
              href="#contact"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-[#5651e5] to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Contact Me
              </span>
            </a>
            </li>
            
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden mb-6 mr-3"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="/">
                {/* <img
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  /> */}
                <div className="flex ml-0 mb-5">
                  <h1 className="text-[#5651e5] text-7xl font-serif">P</h1>
                  <h2 className="text-purple-600 text-5xl mt-[20.5px] font-serif">
                    r
                  </h2>
                </div>
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </a>
              <a href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </a>
              <a href="#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </a>
              <a href="#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </a>
              <a href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
