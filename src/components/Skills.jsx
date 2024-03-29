import Html from '../images/skills/html.png';
import Css from '../images/skills/css.png';
import Javascript from '../images/skills/javascript.png';
import ReactImg from '../images/skills/react.png';
import Tailwind from '../images/skills/tailwind.png';
import Github from '../images/skills/github1.png';
import Firebase from '../images/skills/firebase.png';
import NextJS from '../images/skills/nextjs.png'
import Java from '../images/skills/java.png';
import Python from '../images/skills/python.png';
import Socket from '../images/skills/socket.io.png';
import GoLang from '../images/skills/golang-1.svg'
import Rust from '../images/skills/rust.svg'
import Flask from '../images/skills/flask.png'
import FastApi from '../images/skills/fastapi.svg'

const skillsArray = [
  { src: Html, name: 'HTML' },
  { src: Css, name: 'CSS' },
  { src: Javascript, name: 'JavaScript' },
  { src: ReactImg, name: 'React' },
  { src: Tailwind, name: 'Tailwind CSS' },
  { src: Github, name: 'GitHub' },
  { src: Firebase, name: 'Firebase' },
  { src: NextJS, name: 'Next.js' },
  { src: Java, name: 'Java' },
  { src: Python, name: 'Python' },
  { src: Socket, name: 'Socket.io' },
  { src: GoLang, name: 'GoLang' },
  { src: Rust, name: 'Rust' },
  { src: Flask, name: 'Flask' },
  { src: FastApi, name: 'Fast Api' }
];

const Skills = () => {
  return (
    <div id='skills' className='w-full p-2 mb-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-7'>
          {skillsArray.map((skill, index)=>{return(<div key = {index} className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5'>
              <div className='m-auto'>
                <img src={skill.src} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center '>
                <h3>{skill.name}</h3>
              </div>
            </div>
          </div>)})}
        </div>
      </div>
    </div>
  );
};

export default Skills;
