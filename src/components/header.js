import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import './style.scss';
import bitmoji from '../images/bitmoji.png';
console.log(bitmoji);

const Header = ({ siteTitle }) => (
  <header>
      <div class="title">
        <img class="bitmoji" src={bitmoji} alt="bitmoji selfie" />
        <Link to="/">{siteTitle}</Link>
      </div>

      <div class="links">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>

  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
