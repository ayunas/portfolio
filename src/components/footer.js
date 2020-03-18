import React from 'react';
import {Link} from 'gatsby';

const Footer = () => {
    return (
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            
            <Link className="home" to="/">back to home page</Link>
        </footer>
    )
}

export default Footer;