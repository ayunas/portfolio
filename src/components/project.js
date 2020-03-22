import React from 'react';
// import {Link} from 'gatsby';
// import Img from 'gatsby-image';


const Project = ({title,techStack,description,image}) => {

    const [hover,setHover] = React.useState(false);

    return (
        <section onClick={() => setHover(!hover)} class="project">
            {hover ? <div class="project-info">
                            <h3>{title}</h3>
                            <p>{techStack}</p>
                            <p>{description}</p>
                    </div> : 
            <img src={image}/> }
            
        </section>
    )
}

export default Project;