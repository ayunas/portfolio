import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Filler from '../components/filler';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <p>Welcome to the projects page</p>
    <Filler/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage;


