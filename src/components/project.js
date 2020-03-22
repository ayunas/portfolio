import React from 'react';
// import {Link} from 'gatsby';
// import Img from 'gatsby-image';


const Project = ({title,techStack,description,image}) => (
        <section className="project">
            <img src={image}/>  
            <div className="project-info">
                <h3>{title}</h3>
                <p>{techStack}</p>
                <p>{description}</p>
            </div>
        </section>
)

export default Project;