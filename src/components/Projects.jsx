import yourNews from "../images/projects/your-news.png";
import designOnly from "../images/projects/design-only.png";
import weatherApp from "../images/projects/weather-app.png";
import sidePrject from "../images/projects/side-projects.png";
import rawScript from '../images/projects/Rawscript.jpg'
import mac from '../images/projects/Mac.png'
let projectArray = [
  {
    name: "Your News",
    src: yourNews,
    techUsed: "HTML, CSS, JS",
    Code: "https://github.com/Kashina69/Your-News",
    Demo: "https://your-news-69.web.app/",
  },
  {
    name: "Design Only ",
    src: designOnly,
    techUsed: "HTML, CSS, JS, GSAP",
    Code: "https://github.com/Kashina69/Design-Only",
    Demo: "https://design-only-177013.web.app/",
  },
  {
    name: "Apple Mac Clone",
    src: mac,
    techUsed: "HTML, CSS, JS, GSAP",
    Code: "https://github.com/Kashina69/Apple-Mac",
    Demo: "https://side-projects-ecd44.web.app/#Apple-Mac",
  },
  {
    name: "WeatherApp",
    src: weatherApp,
    techUsed: "HTML, CSS, JS",
    Code: "https://github.com/Kashina69/Weather-app",
    Demo: "https://side-projects-ecd44.web.app/#weatherapp",
  },
  {
    name: "SideProject",
    src: sidePrject,
    techUsed: "HTML, CSS, JS, Etc",
    Code: "https://github.com/Kashina69/Side-Project",
    Demo: "https://side-projects-ecd44.web.app/",
  },
  {
    name: "RawScript",
    src: rawScript,
    techUsed: "Programming Language Made With Pyhton",
    Code: "https://github.com/Kashina69/RawScript",
    Demo: "https://github.com/Kashina69/RawScript",
  },

  
];

function Projects() {
  return (
    <>
      <div id="projects"  className="w-full p-2 mb-12 ">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            PROJECTS
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projectArray.map((project, index) => {
              return (
                <div
                  key={index}
                  className="relative overflow-hidden flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#6661ef] to-[#709dff]"
                >
                  <img
                    className="rounded-xl group-hover:opacity-40 hover:scale-105 ease-in opacity-20 duration-300"
                    src={project.src}
                    alt="/"
                    loading="lazy"
                  />
                  <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="text-3xl text-white tracking-wider text-center">
                      {project.name}
                    </h3>
                    <p className="pb-4 pt-2 text-white text-sm text-center">
                      {project.techUsed}
                    </p>
                    <div className="flex gap-6">
                      <a
                        href={project.Code}
                        className="text-center py-3 w-full rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                      <a
                        href={project.Demo}
                        className="text-center py-3 w-full rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
