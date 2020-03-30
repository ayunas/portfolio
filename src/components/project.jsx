import React from 'react';
import Test from './test.jsx';

import {SocialMediaIconsReact as Social} from 'social-media-icons-react';
import {Icon, InlineIcon} from '@iconify/react';
import Redux from '@iconify/icons-logos/redux';
import Reactjs from '@iconify/icons-logos/react';
import Node from '@iconify/icons-logos/nodejs';
import Django from '@iconify/icons-logos/django';
import Flask from '@iconify/icons-simple-icons/flask';
import Expo from '@iconify/icons-cib/expo';
import Netlify from '@iconify/icons-logos/netlify';
import Heroku from '@iconify/icons-logos/heroku-icon';
import Postgres from '@iconify/icons-logos/postgresql';
import AWS from '@iconify/icons-logos/aws';
import Python from '@iconify/icons-logos/python';
import HTML5 from '@iconify/icons-logos/html-5';
import CSS3 from '@iconify/icons-logos/css-3';
import Assembly from '@iconify/icons-octicon/file-binary';
import Javascript from '@iconify/icons-logos/javascript';
import Gatsby from '@iconify/icons-logos/gatsby';
import SCSS from '@iconify/icons-logos/sass';
import LESS from '@iconify/icons-logos/less';
import Express from '@iconify/icons-logos/express';
import Postman from '@iconify/icons-logos/postman';
import ReactNative from '@iconify/icons-emojione/mobile-phone';

const images = require.context('../images', true);
//https://webpack.js.org/guides/dependency-management/  / https://github.com/survivejs/webpack-book/issues/80
//dynamically importing images, using the context method of require.  input the directory you want to use, and it returns a function that allows you to query the newly created static context for the image.  use './<file_name>'  to query for the image.  true 2nd argument for including subdirectories in the context.  
// const techStack = {redux};

const techStack = {Reactjs,Redux,Node,Django,Flask,Expo,Netlify,Heroku,Postgres,AWS,Python,HTML5,CSS3,Assembly,Javascript,Gatsby,SCSS,LESS,Express,Postman,ReactNative}


const Project = ({title,tech,description,image,github,demo}) =>{

    const img_src = images(`./${image}`);

    
    return (
        <section className="project">
            {/* <Test/> */}
            <img src={img_src}/>
            {/* <img src={require(`${image}`)}/> */}
            <div className="project-info">
                <h3>{title}</h3>
                <br/>
                <p>{description}</p>
                <br/>
                <h4>Tech Stack: </h4>
                <ul>{tech.map(t => <li> <Icon icon={techStack[t]} width={"30px"} /> </li>)}</ul>
                <figure>
                    <Social icon="github" size={40} iconSize={10} roundness={20} url={github}/>
                    {/* <figcaption>code</figcaption> */}
                    <Social icon="web" size={40} iconSize={10} roundness={20} url={demo}/>
                </figure>
            </div>
        </section>
    )}

export default Project;