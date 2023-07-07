
const ProjectItem = (projectData) => {
  console.log(projectData.projectUrl)
  return (
    <div id="projectItem" className='relative overflow-hidden flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#6661ef] to-[#709dff]'>
    <img className='rounded-xl group-hover:opacity-40 hover:scale-105 ease-in opacity-20 duration-300' src={projectData.backgroundImg} alt='/' loading='lazy' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{projectData.title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{projectData.tech}</p>
        <a href={projectData.projectUrl} 
        target="_blank"
        rel="noreferrer">
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </a>
    </div>
 </div>
  )
}

export default ProjectItem