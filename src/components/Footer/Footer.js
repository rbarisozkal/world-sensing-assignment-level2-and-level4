import React from 'react'

import { FooterContainer, FooterSocialMedia, Link } from './Footer.elements';

export const Footer = () => {
    return (
        
        <FooterContainer>
            <FooterSocialMedia>
            <i style={{color:'#3D83D9'}} className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-linkedin fa-2x"></i>
            </FooterSocialMedia>
            <Link>jobspoland@worldsensing.com
            </Link>
        </FooterContainer>
        
    )
}
export default Footer;
