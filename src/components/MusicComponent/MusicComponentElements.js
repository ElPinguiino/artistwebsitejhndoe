import styled from 'styled-components';
import Image from '../../assets/jhndoe.jpg';

export const MusicComponentMainComponent = styled.div`
    background: #0c0c0c;
    display: grid;
    height: 2000px;
    width: auto;
    background-image: url(${Image});
    background-attachment: fixed;
    background-size: contain;
`

export const MusicComponentBgContainer = styled.div`
    margin-top: 10rem;
`

export const StyledIframeContainer = styled.div`
    overflow: hidden;
    padding-bottom: 1rem;
    position: relative;
    display: grid;
`

export const YouTubeStyledIframe = styled.iframe`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
    width: 850px;
    opacity: 0.90;

    @media screen and (max-width: 850px) {
        height: 400px;
        width: 650px; 
    }

    @media screen and (max-width: 480px) {
        height: 400px;
        width: 350px; 
    }
`

export const SpotifyStyledIframe = styled.iframe`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
    width: 850px;
    opacity: 0.90;

    @media screen and (max-width: 850px) {
        height: 400px;
        width: 650px; 
    }

    @media screen and (max-width: 480px) {
        height: 400px;
        width: 350px; 
    }
`

export const SoundcloudStyledIframe = styled.iframe`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
    width: 850px;
    opacity: 0.90;

    @media screen and (max-width: 850px) {
        height: 400px;
        width: 650px; 
    }

    @media screen and (max-width: 480px) {
        height: 400px;
        width: 350px; 
    }
`