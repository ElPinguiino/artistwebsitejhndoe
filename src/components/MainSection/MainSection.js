import { MainSectionMainContainer, MainSectionBackgroundContainer, MusicPlayerContainer, ImageBackground } from './MainSectionElements';
import AboutSection from './AboutSection/AboutSection'

import Image from '../../assets/jhndoe.jpg';
import Footer from '../Footer/Footer';
import MusicPlayer from './MusicPlayer/MusicPlayer';

const MainSection = () => {
    return (
        <>
            <MainSectionMainContainer>
                <MainSectionBackgroundContainer>
                    <MusicPlayerContainer>
                        <MusicPlayer />
                    </MusicPlayerContainer>
                    <AboutSection />
                    <Footer />
                </MainSectionBackgroundContainer>
            </MainSectionMainContainer>
        </>
    )
}

export default MainSection
