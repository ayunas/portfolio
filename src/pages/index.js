import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"  
import SEO from "../components/seo";
import nauticaSelfie from '../images/nautica-selfie.png';
import velvetSelfie from '../images/velvet-selfie-2.jpg';
// import Terminal from '../../react-animated-term/';
import Terminal from 'react-animated-term';
import Tech from '../components/Tech';
// import projectData from '../data/projectData.json';
import techStackData from '../data/techStack.json';


const termLines = [
  {
    'text' : "Hi there!  My name is Amir...",
    'cmd' : true
  },
  {
    'text' : "I'm a full stack developer, with a little bit of cloud on the side...",
    'cmd' : true
  },
  {
    'text' : "\n",
    'cmd' : false
  },
  {
    'text' : "Welcome to my portfolio site. Sit back, relax, and check out my projects at the top right...",
    'cmd' : true
  },
  // {
  //   'text' : "This is my tech stack: ",
  //   'cmd' : true
  // },
  // {
  //   'text' : "HTML",
  //   'cmd' : false
  // },
  // {
  //   'text' : "CSS",
  //   'cmd' : false
  // },
  // {
  //   'text' : "SCSS",
  //   'cmd' : false
  // },
  // {
  //   'text' : "Javascript",
  //   'cmd' : false
  // },
  // {
  //   'text' : "Python",
  //   'cmd' : false
  // },
  // {
  //   'text' : "React",
  //   'cmd' : false
  // },
  // {
  //   'text' : "React Native",
  //   'cmd' : false
  // },
  // {
  //   'text' : "Redux",
  //   'cmd' : false
  // },
  // {
  //   'text' : "Node",
  //   'cmd' : false
  // },
  // {
  //   'text' : "Express",
  //   'cmd' : false
  // },
  // {
  //   'text' : "Django",
  //   'cmd' : false
  // },
  // {
  //   'text' : "Flask",
  //   'cmd' : false
  // },
  // {
  //   'text' : "SQL",
  //   'cmd' : false
  // },
  // {
  //   'text' : "AWS",
  //   'cmd' : false
  // },
  {
    'text' : "\n",
    'cmd' : false
  },
  {
    'text' : "If you want to chat, click on Contact in the top right...",
    'cmd' : true
  },
  
]


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <figure className="index-image">
      <img id="selfie" src={velvetSelfie} alt="Amir Yunas Pic"/>
      <Terminal lines={termLines} interval={50} />

      <aside>
        <h2>Tech Stack</h2>
        <div className="tech-stack">
          {techStackData.map(t => <Tech icon={t.iconFile} />)}
        </div>
      </aside>
    </figure>
    {/* <p><strong id="hi">I'm Amir</strong> A full stack software engineer, with a little bit of cloud on the side...</p> */}
  </Layout>
)

export const imageQuery = graphql`
query {
  bitmoji : file(relativePath: {eq : "bitmoji.png"})
  {
    childImageSharp {
      fluid(maxWidth : 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`;

export default IndexPage
