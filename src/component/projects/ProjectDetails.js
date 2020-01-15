import React from 'react'
// import ProjectSummary from './ProjectSummary'
const ProjectDetails = (props) =>{
    // console.log(props)
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
           <div className="card z-depth-0">
           <div className="card-content">
               <span className="card-tittle">Project Tittle -{id}</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperntur sequi tempore cumque quaerat accusamus quidem, earum eius natus quia quo quasi voluptates libero adipisci a voluptas nesciunt fuga consectetur aperiam?</p>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by The Net Ninja</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
        </div>
      </div>

    )
    
}

export default ProjectDetails;