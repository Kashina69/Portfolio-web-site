const navLink =
  "bg-left-bottom bg-gradient-to-r from-[#5651e5] to-purple-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-purple-300 md:font-normal font-bold text-black ";
function NavBarLinks() {
  return (
    <>
    
      <li className=" text-sm uppercase hover:text-[#5651e5] ">
        <a
          className="group text-[#5651e5] transition-all duration-300  ease-in-out"
          href="#home"
          
        >
          <span className={navLink}>Home</span>
        </a>
      </li>
      <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
        <a
          className="group text-[#5651e5] transition-all duration-300  ease-in-out"
          href="#about"
          
        >
          <span className={navLink}>About</span>
        </a>
      </li>
      <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
        <a
          className="group text-[#5651e5] transition-all duration-300  ease-in-out"
          href="#skills"
          
        >
          <span className={navLink}>Skills</span>
        </a>
      </li>
      <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
        <a
          className="group text-[#5651e5] transition-all duration-300  ease-in-out"
          href="#projects"
          
        >
          <span className={navLink}>Projects</span>
        </a>
      </li>
      <li className="md:ml-10 text-sm uppercase hover:text-[#5651e5] ">
        <a
          className="group text-[#5651e5] transition-all duration-300 ease-in-out"
          href="#contact"
          
        >
          <span className={navLink}>Contacts</span>
        </a>
      </li>
    </>
  );
}

export default NavBarLinks;
