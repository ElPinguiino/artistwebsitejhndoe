import React from 'react'

import { MusicComponentMainComponent, MusicComponentBgContainer, MusicComponentBackground, StyledIframeContainer, YouTubeStyledIframe, SpotifyStyledIframe, SoundcloudStyledIframe } from './MusicComponentElements';
import Image from '../../assets/jhndoe.jpg';
import Footer from '../Footer/Footer';

const MusicComponent = () => {
    return (
        <>
            <MusicComponentMainComponent>
                <MusicComponentBgContainer>
                    <StyledIframeContainer>
                        <YouTubeStyledIframe 
                            src="https://www.youtube.com/embed/videoseries?list=PLpdc2x83LdTix1lILylXZHMNbOSDnyr9_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        />
                    </StyledIframeContainer>
                    <StyledIframeContainer>
                        <SpotifyStyledIframe 
                            src="https://open.spotify.com/embed/artist/7a5Rq1HSvCeiZIGhdISThp?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
                    </StyledIframeContainer>
                    <StyledIframeContainer>
                        <SoundcloudStyledIframe 
                            scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1362250450&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        />
                    </StyledIframeContainer>
                    <Footer />
                </MusicComponentBgContainer>
            </MusicComponentMainComponent>
        </>
    )
}

export default MusicComponent
