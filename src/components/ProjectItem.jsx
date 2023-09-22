import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectItem({image, name, id}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/projects/${id}`);
  };
  return (
    
    <>
    <div className='projectItem' onClick={handleClick}>
     
        
        <div style={{backgroundImage:`url(${image})`}} className='bgImage'></div>
        <h1>{name}</h1>
        </div>
    </>)
}

export default ProjectItem
