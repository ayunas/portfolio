import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Filler from '../components/filler';
import Project from '../components/project';

const ProjectsPage = () => (
  <Layout>
    <section class="projects">
      <Project title="project title" techStack="JS" description="cool project!" image={"https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg"}/>
      <Project title="2nd project" techStack="Python" description="cool project!" image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"}/>
    </section>
    <SEO title="Projects" />
    {/* <Filler/> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage;


