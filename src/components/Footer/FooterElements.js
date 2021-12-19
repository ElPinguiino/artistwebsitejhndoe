import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    margin-top: 6rem;
`

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    max-width: 1100px;
    margin: auto;
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 40px;
`

export const WebsiteRights = styled.small`
    color: #fff;
    padding: 1rem;
    margin-bottom: 16px;
`