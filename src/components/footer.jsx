import React from 'react';
import {Link} from 'gatsby';
import {Icon} from '@iconify/react';
import gatsby from '@iconify/icons-simple-icons/gatsby';
import aws from '@iconify/icons-cib/amazon-aws';
import reactIcon from '@iconify/icons-logos/react';


const Footer = () => {
    return (
        <footer>
            ©  <a href="http://amiryunas.me" >amiryunas.me</a> <span></span>{new Date().getFullYear()},
            Built with{` `}
            <a href="https://www.gatsbyjs.org"target="_blank"><Icon icon={gatsby} color="white" width={30} /></a>
            <a href="https://www.reactjs.org"target="_blank"><Icon icon={reactIcon} width={30} /></a>
            Deployed in <a href="https://www.aws.amazon.com"target="_blank"><Icon icon={aws} color="white" width={40} /></a>
        </footer>
    )
}

export default Footer;