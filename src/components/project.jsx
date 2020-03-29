import React from 'react';
import {SocialMediaIconsReact as Social} from 'social-media-icons-react';
const images = require.context('../images', true);
//https://webpack.js.org/guides/dependency-management/  / https://github.com/survivejs/webpack-book/issues/80
//dynamically importing images, using the context method of require.  input the directory you want to use, and it returns a function that allows you to query the newly created static context for the image.  use './<file_name>'  to query for the image.  true 2nd argument for including subdirectories in the context.  

const Project = ({title,tech,description,image,github}) =>{

    console.log(image);
    const img_src = images(`./${image}`);
    console.log(img_src);
    
    return (
        <section className="project">
            <img src={img_src}/>
            {/* <img src={require(`${image}`)}/> */}
            <div className="project-info">
                <h3>{title}</h3>
                <br/>
                <p>{description}</p>
                <br/>
                <h4>Tech Stack: </h4>
                <ul>{tech.map(t => <li>{t}</li>)}</ul>
                <figure>
                    <Social icon="github" size={40} iconSize={10} roundness={20} url={github} />
                    {/* <figcaption>code</figcaption> */}
                </figure>
            </div>
        </section>
    )}

export default Project;