import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import { Link } from 'react-router-dom'
import Git from '@material-ui/icons/GitHub'
import '../style/ProjectDisplay.css'
function ProjectDisplay() {
    const { id } = useParams();

    const project = ProjectList[id]
     
  return(<>
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
        <p><strong>Skills: </strong>{project.skill}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={project.github} target="_blank">
        <Git/></Link></p>
        
    </div>
  </>)
    
}

export default ProjectDisplay
