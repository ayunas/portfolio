import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"  
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <h2>I'm Amir</h2>
    <h2>A full stack developer</h2>
    <h2>I code... I cloud...</h2>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
