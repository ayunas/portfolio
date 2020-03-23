import React from 'react';
// import {Link} from 'gatsby';
// import Img from 'gatsby-image';


const Project = ({title,tech,description,image}) =>{ 
    console.log(image);
    
    return (
        <section className="project">
            <img src={`${image}`}/>  
            <div className="project-info">
                <h3>{title}</h3>
                <p>{tech}</p>
                <p>{description}</p>
            </div>
        </section>
    )}

export default Project;