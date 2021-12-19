import React from 'react'
import { VideosSectionMainContainer, VideosSectionBackgroundContainer, VideosSectionStyledIframesContainer, StyledIframeContainer, YouTubeStyledIframe } from './VideosComponentElements';
import Footer from '../Footer/Footer';

const VideosComponent = () => {
    return (
        <>
            <VideosSectionMainContainer>
                <VideosSectionBackgroundContainer>
                    <VideosSectionStyledIframesContainer>
                        <StyledIframeContainer>
                            <YouTubeStyledIframe
                                src="https://www.youtube.com/embed/NBSfoIb55oM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                            />
                        </StyledIframeContainer>
                        <StyledIframeContainer>
                            <YouTubeStyledIframe
                                src="https://www.youtube.com/embed/J5l_51y2Rh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                            />
                        </StyledIframeContainer>
                        <StyledIframeContainer>
                            <YouTubeStyledIframe
                                src="https://www.youtube.com/embed/gbyX5rs5Log" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                            />
                        </StyledIframeContainer>
                    </VideosSectionStyledIframesContainer>
                    <Footer />
                </VideosSectionBackgroundContainer>
            </VideosSectionMainContainer>
        </>
    )
}

export default VideosComponent
