import styled from 'styled-components';
import Image from '../../assets/jhndoe.jpg';

export const TourComponentMainContainer = styled.div`
    background: #0c0c0c;
    display: grid;
    height: 1200px;
`

export const TourComponentBackgroundContainer = styled.div`
    background-image: url(${Image});
    background-attachment: fixed;
    background-size: contain;
`

export const TourComponentDetailsContainer = styled.div`
    margin-top: 10rem;
`

export const StyledH1 = styled.h1`
    color: white;
`