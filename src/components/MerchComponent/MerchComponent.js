import React from 'react'
import { MerchComponentMainContainer, MerchComponentBackgroundContainer, MerchComponentDetailsContainer, StyledH1 } from './MerchComponentElements';

import Footer from '../Footer/Footer';

const MerchComponent = () => {
    return (
        <>
            <MerchComponentMainContainer>
                <MerchComponentBackgroundContainer>
                    <MerchComponentDetailsContainer>
                        <StyledH1>Coming Soon</StyledH1>
                    </MerchComponentDetailsContainer>
                    <Footer />
                </MerchComponentBackgroundContainer>
            </MerchComponentMainContainer>
        </>
    )
}

export default MerchComponent
