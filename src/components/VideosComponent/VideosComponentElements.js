import styled from 'styled-components';
import Image from '../../assets/jhndoe.jpg';

export const VideosSectionMainContainer = styled.div`
    background: #0c0c0c;
    display: grid;
`

export const VideosSectionBackgroundContainer = styled.div`
    background-image: url(${Image});
    background-attachment: fixed;
    background-size: contain;
    height: 2000px;
`

export const VideosSectionStyledIframesContainer = styled.div`
    margin-top: 10rem;
    @media screen and (max-width: 480px) {
        margin-top: 5rem;
    }
`

export const StyledIframeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`

export const YouTubeStyledIframe = styled.iframe`
    margin-right: auto;
    margin-left: auto;
    height: 500px;
    width: 850px;

    @media screen and (max-width: 850px) {
        height: 400px;
        width: 650px; 
    }

    @media screen and (max-width: 480px) {
        height: 250px;
        width: 350px; 
    }
`