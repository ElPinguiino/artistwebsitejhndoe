import { MainSectionMainContainer, MainSectionBackgroundContainer, MusicPlayerContainer, ImageBackground } from './MainSectionElements';
import AboutSection from './AboutSection/AboutSection'

import Image from '../../assets/jhndoe.jpg';
import Footer from '../Footer/Footer';
import Player from './Player/Player';

const MainSection = () => {
    return (
        <>
            <MainSectionMainContainer>
                <MainSectionBackgroundContainer>
                    <MusicPlayerContainer>
                        <Player />
                    </MusicPlayerContainer>
                    <AboutSection />
                    <Footer />
                </MainSectionBackgroundContainer>
            </MainSectionMainContainer>
        </>
    )
}

export default MainSection
