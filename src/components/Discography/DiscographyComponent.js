import React from 'react'
import { DiscographyComponentMainContainer, DiscographyComponentBackgroundContainer, SongTilesContainer, DiscographyComponentJhnDoe, DiscographyComponentH1 } from './DiscographyComponentElements';

import SongTile from './SongTile/SongTile';
import GeniusSongTile from './GeniusSongTile/GeniusSongTile';
import Footer from '../Footer/Footer';

const DiscographyComponent = () => {
    return (
        <>
            <DiscographyComponentMainContainer>
                <DiscographyComponentBackgroundContainer>
                    {/* <GeniusSongTile /> */}
                    <SongTilesContainer>
                        <SongTile />
                    </SongTilesContainer>
                    <Footer />
                </DiscographyComponentBackgroundContainer>
                
            </DiscographyComponentMainContainer>
        </>
    )
}

export default DiscographyComponent
