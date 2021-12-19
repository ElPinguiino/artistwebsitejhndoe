import React from 'react';
import Footer from '../Footer/Footer';
import { ContactComponentMainContainer, ContactComponentBackgroundImageContainer, ContactComponentContactContainer, Contact } from './ContactComponentElements';

const ContactComponent = () => {
    return (
        <>
            <ContactComponentMainContainer>
                <ContactComponentBackgroundImageContainer>
                    <ContactComponentContactContainer>
                        <Contact>

                        </Contact>
                    </ContactComponentContactContainer>
                    <Footer />
                </ContactComponentBackgroundImageContainer>
            </ContactComponentMainContainer>
        </>
    )
}

export default ContactComponent