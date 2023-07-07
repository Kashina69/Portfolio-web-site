import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiReplit } from "react-icons/si";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Prince</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building clean, responsive, aesthetic front-end web
            applications robust back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto gap-2 py-4">
            <a
              title="Linkedin"
              href="www.linkedin.com/in/prince-rawat-web-developer"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full  shadow-lg group bg-slate-200 shadow-gray-400 sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="group-hover:scale-125 ease-in duration-150" />
              </div>
            </a>
            <a
              title="Git Hub"
              href="https://github.com/Kashina69"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg  group bg-slate-200 shadow-gray-400 sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="group-hover:scale-125 ease-in duration-150" />
              </div>
            </a>
            <a
              title="Gmail"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=princerawatji69@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg group bg-slate-200 shadow-gray-400 sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="group-hover:scale-125 ease-in duration-150" />
              </div>
            </a>
            <a
              title="Leetcode"
              href="https://leetcode.com/Kashina69/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg group bg-slate-200 shadow-gray-400 sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiLeetcode className="group-hover:scale-125 ease-in duration-150" />
              </div>
            </a>
            <a
              title="Replit"
              href="https://replit.com/@Kashina691"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg group bg-slate-200 shadow-gray-400 sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiReplit className="group-hover:scale-125 ease-in duration-150" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
