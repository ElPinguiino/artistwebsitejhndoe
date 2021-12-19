import styled from 'styled-components';
import Image from '../../assets/jhndoe.jpg';

export const MerchComponentMainContainer = styled.div`
    background: #0c0c0c;
    display: grid;
`

export const MerchComponentBackgroundContainer = styled.div`
    background-image: url(${Image});
    background-attachment: fixed;
    background-size: contain;
    height: 1200px;

`
export const MerchComponentDetailsContainer = styled.div`
    margin-top: 10rem;
`

export const StyledH1 = styled.h1`
    color: white;
`