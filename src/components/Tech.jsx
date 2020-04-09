import React from 'react';

// import Redux from '@iconify/icons-logos/redux';
// import Redux from '../images/redux.png';
// import Reactjs from '@iconify/icons-logos/react';
// import Node from '@iconify/icons-logos/nodejs';
// import Django from '@iconify/icons-logos/django';
// import Flask from '@iconify/icons-simple-icons/flask';
// import Expo from '@iconify/icons-cib/expo';
// import Netlify from '@iconify/icons-logos/netlify';
// import Heroku from '@iconify/icons-logos/heroku-icon';
// import Postgres from '@iconify/icons-logos/postgresql';
// import AWS from '@iconify/icons-logos/aws';
// import Python from '@iconify/icons-logos/python';
// import HTML5 from '@iconify/icons-logos/html-5';
// import CSS3 from '@iconify/icons-logos/css-3';
// import Assembly from '@iconify/icons-octicon/file-binary';
// import Javascript from '@iconify/icons-logos/javascript';
// import Gatsby from '@iconify/icons-logos/gatsby';
// import SCSS from '@iconify/icons-logos/sass';
// import LESS from '@iconify/icons-logos/less';
// import Express from '@iconify/icons-logos/express';
// import Postman from '@iconify/icons-logos/postman';
// import ReactNative from '@iconify/icons-emojione/mobile-phone';
// import techIcons from '../images/techIcons';

const images = require.context('../images/icons', true);
// const techStack = {Reactjs,Redux,Node,Django,Flask,Expo,Netlify,Heroku,Postgres,AWS,Python,HTML5,CSS3,Assembly,Javascript,Gatsby,SCSS,LESS,Express,Postman,ReactNative}

const Tech = ({icon}) => {
    console.log('icon: ' , icon);
    console.log(icon === 'aws.png');

    const img_src = images(`./${icon}`);
    let caption;
    let infoBox;
    let img;
    

    switch (icon) {
        case 'aws.png':
            caption = icon.replace('aws.png','Amazon Web Services');
            infoBox = <p className="info-box">{caption}</p>
            img = <img className="aws-icon" src={img_src} alt={icon} />
            break;
        case 'reactnative.png':
            caption = icon.replace('native.png', ' native');
            infoBox = <p className="info-box">{caption}</p>
            img = <img className="react-native-icon" src={img_src} alt={icon} />
            break;
        
        case 'css.png':
            img = <img className="css-icon" src={img_src} alt={icon} />
            break;
        default: 
            caption = icon.replace('.png','');
            infoBox = <p className="info-box">{caption}</p>
            img = <img src={img_src} alt={icon} />
    }


    return (
        <section className="tech">
            {/* <img src={img_src} alt={icon}/> */}
            {img}
            {/* <p class="info-box">{caption}</p>  */}
            {infoBox}
        </section>
    )
}

export default Tech;
