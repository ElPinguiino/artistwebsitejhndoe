import styled from "styled-components";
import Image from '../../assets/jhndoe.jpg';
import { Formik, Field, Form } from 'formik';

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

// Styles for Form

export const StyledH1 = styled.h1`
    color: blue;
`

export const StyledField = styled(Field)`
    padding: 0.5em;
    margin: 0.5em;
    width: 100%;
    border: 2px black solid;
    box-shadow: 5px 5px;
    border-radius: 10px;
`

export const StyledForm = styled(Form)`

`

export const StyledFormikContainer = styled.div`
    margin: 0 auto;
`

export const StyledButton = styled.button`
    width: 5em;
    height: 3em;
    background-color: red;
    border: 0px;
`