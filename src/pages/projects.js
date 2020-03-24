import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Filler from '../components/filler';
import Project from '../components/project';
import projectData from '../data/projectData.json';

const ProjectsPage = () => {
  // const jsD = JSON.parse(jsD);
  console.log(projectData);
  
  return (
      <Layout>
        <section className="projects">
          {projectData.map(p => <Project title={p.title} tech={p.tech} description={p.description} image={p.image} />)}
          {/* <Project title="project title" tech="JS" description="cool project!" imagePath={"https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg"}/>
          <Project title="2nd project" tech="Python" description="cool project!" imagePath={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"}/> */}
        </section>
        <SEO title="Projects" />
        {/* <Filler/> */}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
)}

export default ProjectsPage;


