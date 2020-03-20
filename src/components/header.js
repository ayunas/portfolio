import { Link, graphql,useStaticQuery } from "gatsby";
import React, {useState,useEffect} from "react";
import './style.scss';
import bitmoji from '../images/bitmoji.png';
import Img from 'gatsby-image';

const Header = (props) => {
  const {siteTitle} = props;
  console.log('props', props);

  const queryData = useStaticQuery(graphql`
  query {
    file(relativePath: {eq : "bitmoji.png"}){
    childImageSharp {
      fluid(maxWidth : 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`);

console.log(queryData);

  const [scroll,setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      // console.log('scroll event added. pixels scrolled:',window.scrollY);
      const scrollCheck = window.scrollY > 10;
      scrollCheck ? setScroll(true) : setScroll(false);
    })
  })

  return (
    <header className={scroll ? "nav scroll" : "nav"}>
        <div className="title">
          <img className="bitmoji" src={bitmoji} alt="bitmoji selfie" />
          <Img fluid={queryData.file.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="This is a picture of my face."
          />
          <Link to="/">{siteTitle}</Link> 
        </div>

        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </header>
  )
}

export default Header



// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }