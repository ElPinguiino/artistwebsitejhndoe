import styled from 'styled-components';
import '../../../assets/fonts/fonts.css';

export const AboutSectionMainContainer = styled.div`
    margin-top: 10rem;
    display: grid;
    justify-content: center;
    z-index: 1;
    width: 100%;
`

export const AboutSectionH1 = styled.h1`
    color: #fff;
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: underline;
    justify-content: center;
    justify-self: center;
`

export const AboutSectionPContainer = styled.div`
    margin-top: -2rem;
    display: grid;
    justify-content: center;
    padding: 80px;
    line-height: 1.6;

     @media screen and (max-width: 480px) {
         padding: 40px;
     }
`
export const AboutSectionP = styled.p`
    color: #fff;
    font-family: 'Rubik', sans-serif;
`