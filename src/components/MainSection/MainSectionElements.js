import styled from 'styled-components';
import Image from '../../assets/jhndoe.jpg';

export const MainSectionMainContainer = styled.div`
    background: #0c0c0c;
    display: grid;
`

export const MainSectionBackgroundContainer = styled.div`
    background-image: url(${Image});
    background-attachment: fixed;
    background-size: contain;


    @media screen and (min-width: 480px) {

    }
`

export const MusicPlayerContainer = styled.div`
    margin-top: 25rem;
    border: 6px solid black;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`

export const ImageBackground = styled.img`

`