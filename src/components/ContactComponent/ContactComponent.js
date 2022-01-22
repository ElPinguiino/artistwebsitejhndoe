import React from 'react';
import Footer from '../Footer/Footer';
import { ContactComponentMainContainer, ContactComponentBackgroundImageContainer, ContactComponentContactContainer, Contact } from './ContactComponentElements';
import FormComponent from './Form';

const ContactComponent = () => {
    return (
        <>
            <ContactComponentMainContainer>
                <ContactComponentBackgroundImageContainer>
                    <ContactComponentContactContainer>
                        <Contact>
                            <FormComponent />
                        </Contact>
                    </ContactComponentContactContainer>
                    <Footer />
                </ContactComponentBackgroundImageContainer>
            </ContactComponentMainContainer>
        </>
    )
}

export default ContactComponent