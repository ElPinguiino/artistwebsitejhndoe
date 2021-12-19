import styled from "styled-components";
import Image from '../../assets/jhndoe.jpg';

export const ContactComponentMainContainer = styled.div`
    background: #0c0c0c;
    display: grid;
    height: 1200px;  
`

export const ContactComponentBackgroundImageContainer = styled.div`
    background-image: url(${Image});
    background-attachment: fixed;
    background-size: contain;
`

export const ContactComponentContactContainer = styled.div`
    display: flex;
    margin-top: 10rem;
`

export const Contact = styled.div`
    height: 750px;
    width: 750px;
    background-color: #fff;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.5;
    border-radius: 30px;

    @media screen and (max-width: 480px) {
        height: 800px;
        width: 300px;
    }
`