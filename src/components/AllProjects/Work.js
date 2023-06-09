// import './project-card.css';
import React from 'react';
import './work.css'

 import ProjectCard from '../Project-card/ProjectCard';
 import ProjectCardData from './WorkData'

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {ProjectCardData.map((value ,index)=>{
            return <ProjectCard 
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            view={value.view}
            source={value.source}
            />

        })
        }</div>
    </div>
  );
};

export default Work;
