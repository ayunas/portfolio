import { Link, graphql,useStaticQuery } from "gatsby";
import React, {useState,useEffect} from "react";
import './style.scss';
import bitmoji from '../images/bitmoji.png';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Header = (props) => {
  const {siteTitle} = props;
  console.log('props', props);

  const imgQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

console.log(imgQuery);

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
          <Img fluid={imgQuery.file.childImageSharp.fluid} />
          {/* <Link to="/">{siteTitle}</Link>  */}
          <Link fade to="/">{siteTitle}</Link>
        </div>

        <div className="links">
          <Link className="header-links" to="/">Home</Link>
          <Link className="header-links" to="/projects">Projects</Link>
          <Link className="header-links" to="/articles">Articles</Link>
          <Link className="header-links" to="/contact">Contact</Link>
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