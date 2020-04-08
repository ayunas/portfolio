import React from 'react';
// import Redux from '@iconify/icons-logos/redux';
// import Redux from '../images/redux.png';
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
import techIcons from '../images/techIcons';

const images = require.context('../images/icons', true);
// const techStack = {Reactjs,Redux,Node,Django,Flask,Expo,Netlify,Heroku,Postgres,AWS,Python,HTML5,CSS3,Assembly,Javascript,Gatsby,SCSS,LESS,Express,Postman,ReactNative}



const Tech = ({icon}) => {
    console.log(icon);

    const img_src = images(`./${icon}`);

    return (
        <section className="tech-stack">
            <img src={img_src} alt={icon}/>
        </section>
    )
}

export default Tech;
