import SoloLeveling from '../images/solo leveling .jpeg'
const About = () => {
  return (
    <div id="about" className="animate-[fade-in-up_2s_ease-in-out] w-full md:h-screen p-3 pt-24 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 md:mr-9">
            I am a high school student specialize in building mobile responsive
            full stack web applications UI applications that connect with API’s
            and other backend technologies. I’m passionate about learning new
            technologies and understand there is more than one way to accomplish
            a task. I am most proficient in building front-end applications
            using React and Tailwind I am a quick learner and can pick up new
            tech stacks as needed. I believe that being a great developer is not
            about using one specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600 md:mr-9">
            I have been learning programming and web developement since 2021  
            In my spare time i like to play Games <a href="https://playvalorant.com/en-us/" className="hover:text-[#5651e5] text-purple-400 font-bold">(Valorant)</a>, Learning new technologies, Science, PC Building and <a href="https://myanimelist.net/animelist/Prince_rawat" className="hover:text-[#5651e5] text-purple-400 font-bold">Watching Anime</a> 
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <a href="/#projects">Check out some of my latest projects.</a>
          </p>
        </div>
        <div className="w-full transform-gpu h-auto m-auto group shadow-xl bg-gradient-to-r from-[#28313B] to-[#4f565d] mt-20 mb-16 md:mt-0 shadow-gray-400 rounded-xl flex items-center justify-center overflow-hidden ">
          <img src={SoloLeveling} className="rounded-xl hover:opacity-50 hover:scale-105 ease-in opacity-20 duration-300"  alt="https://i.pinimg.com/564x/cb/5a/8c/cb5a8c8f771e54347982136ebedcdbeb.jpg" loading='lazy'  />
        </div>
      </div>
    </div>
  );
};

export default About;
