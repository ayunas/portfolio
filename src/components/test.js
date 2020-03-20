import React from 'react';
import Img from 'gatsby-image';
import {graphql} from 'gatsby-image';


const TestComponent = ({ data }) => { 
  console.log(data);
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  )}
  
  export const query = graphql`
    query {
      file(relativePath: { eq: "bitmoji.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`

    export default TestComponent;
