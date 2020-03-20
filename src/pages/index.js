import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"  
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p><strong id="hi">I'm Amir</strong> A full stack software engineer, with a little bit of cloud on the side...</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
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
