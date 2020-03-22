import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Filler from '../components/filler';
import Project from '../components/project';

const ProjectsPage = () => (
  <Layout>
    <p>Welcome to the projects page</p>
    <div class="projects">
      <Project title="project title" techStack="JS" description="cool project!" img={'blah'}/>
    </div>
    <SEO title="Projects" />
    {/* <Filler/> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage;


