import React from 'react';
// import {Link} from 'gatsby';
// import Img from 'gatsby-image';


const Project = ({title,techStack,description,image}) => {

    const [hover,setHover] = React.useState(false);

    const handleHover = () => {
        console.log('handle hover');
        setHover(!hover);
    }

    return (
        <section onMouseEnter ={handleHover} onMouseLeave={handleHover} className="project">
            <div className="project-info">
                <h3>{title}</h3>
                <p>{techStack}</p>
                <p>{description}</p>
            </div>

            <img src={image}/>

            {/* {hover ? <div className="project-info">
                            <h3>{title}</h3>
                            <p>{techStack}</p>
                            <p>{description}</p>
                    </div> : 
            <img src={image}/> } */}
        </section>
    )
}

export default Project;