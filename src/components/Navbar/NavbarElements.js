import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import '../../assets/fonts/fonts.css';


export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'black' : 'transparent')};
    margin-top: -120px;
    width: 100%;
    display: flex;
    place-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 9999;
    @media screen and (max-width: 960px) {
        transition 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: grid;
    justify-content: center;
    height: 120px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px:
`

export const NavLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    font-family: 'Rubik', sans-serif;
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 480px) {

    }
`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 850px) {
        display: block;
        position: absolute;
        margin-right: 1rem;
        margin-top: 2rem;
        top: 0;
        right: 0;
        transform translate{-100%, 46%};
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenuContainer = styled.div`
    display: grid;
    place-items: center;
`

export const NavMenu = styled.ul`
    margin-top: -0.5rem;
    display: flex;
    list-style-type: none;

    @media screen and (max-width: 850px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
    font-size: 1.25rem;
    font-family: 'Rubik', sans-serif;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    &.active {
        border-bottom: 3px solid #fff;
    }
    @media screen and (max-width: 1100px) {
        font-size: 1.15rem;
        padding: 0 0.5rem;
    }
`;

export const SeperatePageNavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    &.active {
        border-bottom: 3px solid #fff;
    }
    @media screen and (max-width: 1100px) {
        font-size: 1.15rem;
        padding: 0 0.5rem;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 850px) {
        display: none;
    }
`