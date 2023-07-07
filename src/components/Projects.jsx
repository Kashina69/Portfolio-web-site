import PropertyImg from "../images/projects/property.jpg";
import CryptoImg from "../images/projects/crypto.jpg";
import NetflixImg from "../images/projects/netflix.jpg";
import TwitchImg from "../images/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  let propertyFinder = {
    title: "Property Finder",
    backgroundImg: PropertyImg,
    projectUrl: "../pages/property",
    tech: "React JS",
  };
  let Crypto = {
    title: "Crypto App",
    backgroundImg: CryptoImg,
    projectUrl: "../pages/crypto",
    tech: "React JS",
  };
  let netflixApp = {
    title: "Netflix App",
    backgroundImg: NetflixImg,
    projectUrl: "../pages/netflix",
    tech: "React JS",
  };
  let twitchUi = {
    title: "Twitch UI",
    backgroundImg: TwitchImg,
    projectUrl: "../pages/twitch",
    tech: "Next JS",
  };
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem {...propertyFinder} />
          <ProjectItem {...Crypto} />
          <ProjectItem {...netflixApp} />
          <ProjectItem {...twitchUi} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
