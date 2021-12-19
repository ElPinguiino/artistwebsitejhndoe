import React from 'react';
import { TourComponentMainContainer, TourComponentBackgroundContainer, TourComponentDetailsContainer, StyledH1 } from './TourComponentElements';


import Footer from '../Footer/Footer';

const TourComponent = () => {
    return (
        <>
            <TourComponentMainContainer>
                <TourComponentBackgroundContainer>
                    <TourComponentDetailsContainer>
                        <StyledH1>Coming Soon</StyledH1>
                    </TourComponentDetailsContainer>
                    <Footer />
                </TourComponentBackgroundContainer>
            </TourComponentMainContainer>
        </>
    )
}

export default TourComponent
