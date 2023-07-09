import { AiOutlineMail } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../images/contact.jpg";

const inputBox = "border-2 rounded-lg p-3 flex border-gray-300";
const contactLinkDiv =
  "rounded-full  shadow-lg group bg-slate-200 shadow-gray-400 sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300";
const socialLink = "group-hover:scale-125 ease-in md:duration-150 duration-75";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="lg:flex-col sm:flex ">
                <div className="flex justify-center overflow-hidden">
                  <img
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg}
                    alt="/"
                    loading="lazy"
                  />
                </div>
                <div className=" md: sm:pl-4">
                  <h2 className="py-4">Prince Rawat</h2>
                  <p>Full-Stack-Web-Application-Developer</p>
                  <p className="py-4">
                    I am available for freelance . Contact me and let&apos;s
                    talk.
                  </p>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className=" sm:flex  gap-2 grid grid-flow-col justify-evenly grid-rows-2 py-4 ">
                  <a
                    href="https://www.linkedin.com/in/prince-rawat-web-developer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={contactLinkDiv}>
                      <FaLinkedinIn className={socialLink} />
                    </div>
                  </a>
                  <a
                    href="https://github.com/kashina69"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={contactLinkDiv}>
                      <FaGithub className={socialLink} />
                    </div>
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=princerawatji69@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={contactLinkDiv}>
                      <AiOutlineMail className={socialLink} />
                    </div>
                  </a>

                  <a href="https://discord.com/users/1021628209692942387">
                    <div className={contactLinkDiv}>
                      <FaDiscord className={socialLink} />
                    </div>
                  </a>
                  <a href="/resume">
                    <div className={contactLinkDiv}>
                      <FaWhatsapp className={socialLink} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/kashina_gaming/">
                    <div className={contactLinkDiv}>
                      <FaInstagram className={socialLink} />
                    </div>
                  </a>
                </div>
                <div className="sm:flex justify-center mt-7 ">
                  <button className="sm:w-2/3 w-full p-4 mr-1 text-gray-100 font-semibold text-sm gap-1 justify-between mt-4 flex">
                    Download CV
                    <GrDocumentDownload />
                  </button>
                  <button className="sm:w-2/3 w-full p-4 ml-1 text-gray-100 font-semibold text-sm gap-1 justify-between mt-4 flex">
                    Download Resume
                    <GrDocumentDownload />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action=""
                method="POST"
                encType="application/x-www-form-urlencoded"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input className={inputBox} type="text" name="name" />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input className={inputBox} type="text" name="phone" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className={inputBox} type="email" name="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input className={inputBox} type="text" name="subject" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="9"
                    name="message"
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 flex justify-evenly items-center mt-4"
                  onClick={() =>
                    alert("Don't worry Your massage has been send")
                  }
                >
                  Send Message
                  <MdAttachEmail />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="#home">
            <div className="rounded-full shadow-lg shadow-gray-400 animate-bounce p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5] " size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
