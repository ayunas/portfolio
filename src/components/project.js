import React from 'react';
// import {Link} from 'gatsby';
// import Img from 'gatsby-image';


const Project = ({title,techStack,description}) => {
    return (
        <section class="project">
            <p>{title}</p>
            <p>{techStack}</p>
            <p>{description}</p>
            <div>This is a Project</div>
        </section>
    )
}

export default Project;