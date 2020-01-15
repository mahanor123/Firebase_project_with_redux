import React from 'react'

const ProjectSummary = ({project}) => {
    return (
            <div className="card z-depth-0 projec-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-titale">{project.title}</span>
                    <p>Posted by the Ninja</p>
                    <p className="grey-text">3rd September,2am</p>
                </div>
            </div>
            
            

 )
    
}

export default ProjectSummary;