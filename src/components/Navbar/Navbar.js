import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    NavLogoContainer, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks,
    SeperatePageNavLinks,
} from './NavbarElements';


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogoContainer>
                        <NavLogo to='/' onClick={toggleHome}>Jhn Doe.</NavLogo>
                    </NavLogoContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <SeperatePageNavLinks to="/" smooth={true} duration={500} spy={true} exact='true' offset={-80}>ABOUT</SeperatePageNavLinks>
                            </NavItem>
                            <NavItem>
                                <SeperatePageNavLinks to="/music" smooth={true} duration={500} spy={true} exact='true' offset={-80}>MUSIC</SeperatePageNavLinks>
                            </NavItem>
                            <NavItem>
                                <SeperatePageNavLinks to="/videos" smooth={true} duration={500} spy={true} exact='true' offset={-80}>VIDEOS</SeperatePageNavLinks>
                            </NavItem>
                            <NavItem>
                                <SeperatePageNavLinks to="/discography" smooth={true} duration={500} spy={true} exact='true' offset={-80}>DISCOGRAPHY</SeperatePageNavLinks>
                            </NavItem>
                            <NavItem>
                                <SeperatePageNavLinks to="/merch" smooth={true} duration={500} spy={true} exact='true' offset={-80}>MERCH</SeperatePageNavLinks>
                            </NavItem>
                            <NavItem>
                                <SeperatePageNavLinks to="/tour" smooth={true} duration={500} spy={true} exact='true' offset={-80}>TOUR</SeperatePageNavLinks>
                            </NavItem>
                            <NavItem>
                                <SeperatePageNavLinks to="/contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>CONTACT</SeperatePageNavLinks>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
