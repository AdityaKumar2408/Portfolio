import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../style/Projects.css'
import { ProjectList } from '../helpers/ProjectList'
function Projects() {
  return (
    <>
      <div className='projects'>
        <h1>
          My Personal Projects
        </h1>
        <div className='projectList'>
         {ProjectList.map((projects, index)=>{
          return <ProjectItem id={index} name={projects.name} image={projects.image}/>
         })}
          
        </div>
      </div>
    </>)
}

export default Projects
