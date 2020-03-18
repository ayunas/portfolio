import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React, {useState,useEffect} from "react";
import './style.scss';
import bitmoji from '../images/bitmoji.png';

const Header = ({ siteTitle }) => {
  const [scroll,setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      // console.log('scroll event added. pixels scrolled:',window.scrollY);
      const scrollCheck = window.scrollY > 10;
      scrollCheck ? setScroll(true) : setScroll(false);
    })
  })

  const handleScroll = (e) => {
    console.log('scrolling',e.target);
    setScroll(!scroll);
  }

  return (
    <header className={scroll ? "nav scroll" : "nav"}>
        <div className="title">
          <img className="bitmoji" src={bitmoji} alt="bitmoji selfie" />
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

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
