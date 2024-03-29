import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavBarLinks from "./NavBarLinks";
import NavLogo from "./favicon-32x32.png";

const NavBar = () => {
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
    <>
      <div
        id="navbar"
        style={{ backgroundColor: "#ecf0f3" }}
        className={
          shadow
            ? "sticky top-0 w-full bg-transparent h-14 bg-blue-400 shadow-lg z-[100] ease-in-out duration-300 opacity-80 hover:opacity-100"
            : "sticky top-0 w-full h-14 z-[100] "
        }
      >
        <div className="flex justify-between w-full h-full md:pl-7 pl-2 mt-1">
          <a href="#home">
            <img
              src={NavLogo}
              alt="Logo"
              width="50"
              height="50"
              className="cursor-pointer "
              loading="lazy"
            />
          </a>

          <div
            className={`${
              nav ? "visible" : " hidden "
            } w-[60vw] absolute top-0 right-0 h-screen transition-colors bg-[#aaaaff] duration-1000 opacity-70 md:hidden `}
          >
            <ul className="h-[70vh] md:h-0 flex flex-col justify-evenly w-[50vw] absolute top-0 right-0 mt-4">
              <NavBarLinks />
            </ul>
          </div>
          <ul className=" hidden h-[70vh] md:h-0 md:flex flex-row justify-evenly w-[50vw] absolute top-0 right-0 mt-4">
            <NavBarLinks />
          </ul>

          <div
            id="hand"
            style={{ color: "#1f2937" }}
            className="md:hidden mr-3 mt-3 hover:bgppur"
          >
            {nav ? (
              <AiOutlineClose
                size={25}
                onClick={handleNav}
                className="HandBurgerMenu duration-1000 rotate-180  transform-gpu z-50"
              />
            ) : (
              <AiOutlineMenu
                size={25}
                onClick={handleNav}
                className="handBurgerMenu duration-1000 rotate-180  transform-gpu z-50"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
