
   
import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />    
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
                    <SidebarRoute to="/music" onClick={toggle}>MUSIC</SidebarRoute>
                    <SidebarRoute to="/videos" onClick={toggle}>VIDEOS</SidebarRoute>
                    <SidebarRoute to="/discography" onClick={toggle}>DISCOGRAPHY</SidebarRoute>
                    <SidebarRoute to="/merch" onClick={toggle}>MERCH</SidebarRoute>
                    <SidebarRoute to="/tour" onClick={toggle}>TOUR</SidebarRoute>
                    <SidebarRoute to="/contact" onClick={toggle}>CONTACT</SidebarRoute>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar