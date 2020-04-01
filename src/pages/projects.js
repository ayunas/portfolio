import React from "react"
import { Link } from "gatsby";

import Terminal from 'react-animated-term';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from '../components/project';
import projectData from '../data/projectData.json';
// import extraProjects from '../data/extras.json';

const ProjectsPage = () => {

  const terminalLines = [{
    'text' : 'My Coding Projects',
    'cmd' : true
  }]

  
  return (
      <Layout>
        {/* <h1 id="project-title">Projects</h1> */}
        <h1 className="terminal-heading"><Terminal lines={terminalLines} interval={80}/></h1>
        <section className="projects">
          {projectData.map(p => <Project title={p.title} tech={p.tech} description={p.description} image={p.image} github={p.github} demo={p.url}/>)}
          {/* {extraProjects.map(ep => <Project title={ep.title} tech={ep.tech} description={ep.description} image={ep.image} github={ep.github} demo={ep.url}/>)} */}
        </section>
        <SEO title="Projects" />
        {/* <Filler/> */}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
)}

export default ProjectsPage;


