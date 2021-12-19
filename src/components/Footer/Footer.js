import React from 'react'

import { FaFacebook, FaInstagram, FaYoutube, FaSoundcloud, FaTwitter, FaReddit } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <>
            <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                            <SocialIcons>
                                <SocialIconLink href="https://www.facebook.com/jhntho" target="_blank" aria-label='Facebook'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="https://www.instagram.com/jhn_doe_/" target="_blank" aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="https://www.youtube.com/channel/UCaZTeZSJhlBIXd9VriVxJ_Q" target="_blank" aria-label='Youtube'>
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="https://soundcloud.com/jhn-tho" target="_blank" aria-label='Soundcloud'>
                                    <FaSoundcloud />
                                </SocialIconLink>
                                <SocialIconLink href="https://twitter.com/jhndoe9" target="_blank" aria-label='Twitter'>
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="https://www.reddit.com/user/jhntho" target="_blank" aria-label='Reddit'>
                                    <FaReddit />
                                </SocialIconLink>
                            </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <WebsiteRights>Milkweed Productions © {new Date().getFullYear()}</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer
