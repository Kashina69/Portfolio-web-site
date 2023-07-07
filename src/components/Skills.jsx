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

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-7'>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={Html} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center '>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={Css} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={Javascript} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={ReactImg} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={Tailwind} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={Firebase} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={Github} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-5 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
              <div className='m-auto'>
                <img src={NextJS} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Python} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
            <div className='p-6 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Java} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Java</h3>
              </div>
            </div>
          </div>
            <div className='p-6 shadow-xl rounded-xl group hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Socket} className='group-hover:scale-110 ease-in duration-300' width='64px' height='64px' alt='/' loading='lazy' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Socket</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
