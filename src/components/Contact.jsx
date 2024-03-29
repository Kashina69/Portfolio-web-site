import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedinIn, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../images/contact.jpg";

const contactLinks = [
  {
    href: "https://www.linkedin.com/in/prince-rawat-web-developer",
    icon: FaLinkedinIn,
  },
  { href: "https://github.com/kashina69", icon: FaGithub },
  {
    href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=princerawatji69@gmail.com",
    icon: AiOutlineMail,
  },
  { href: "https://discord.com/users/1021628209692942387", icon: FaDiscord },
  { href: "https://www.instagram.com/kashina_gaming/", icon: FaInstagram },
];

const inputBox = "border-2 rounded-lg p-3 m-1 flex border-gray-300 w-full";
const contactLinkDiv =
  "rounded-full  shadow-lg group bg-slate-200 shadow-gray-400 sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300";
const socialLink =
  "group-hover:scale-125 ease-in md:duration-150 duration-75 text-[#5651e5]";

const Contact = () => {
  const notifySuccess = () => toast.success("Don't worry your massage has been sent");
  const notifyError = () => toast.error("Sorry for the inconvenience by we got some issue!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("", "", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notifySuccess()

        },
        (error) => {
          console.log("FAILED...", error.text);
          notifyError()
        }
      );
  };

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
                <div className="sm:flex gap-2 grid grid-flow-col justify-evenly grid-rows-2 py-4">
                  {contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={contactLinkDiv}>
                        <link.icon className={socialLink} />
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex justify-center mt-7 ">
                  <a
                    className="w-full flex justify-center"
                    href="https://docs.google.com/document/d/1Mj5LT9suwxHar8JxwNnjMrn147Z4LhuxfuqZuJiWMAE/edit?usp=sharing"
                    target="_blank"
                  >
                    <button className=" p-4 ml-1 text-gray-100 font-semibold text-sm gap-1 justify-between mt-4 flex">
                      Download Resume
                      <GrDocumentDownload />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className={inputBox}
                  type="text"
                  name="user_name"
                  required
                />

                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className={inputBox}
                  type="email"
                  name="user_email"
                  required
                />

                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className={inputBox}
                  rows="15"
                  name="message"
                  required
                ></textarea>

                <button
                  className="w-full p-4 text-gray-100 flex justify-evenly items-center mt-4"
                  type="submit"
                >
                  Send Message <MdAttachEmail />
                </button>
                <ToastContainer />
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
