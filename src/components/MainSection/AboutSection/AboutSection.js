import React from 'react'
import {
    AboutSectionMainContainer,
    AboutSectionH1,
    AboutSectionPContainer,
    AboutSectionP
} from '../AboutSection/AboutSectionElements';

const AboutSection = () => {
    return (
        <>
            <AboutSectionMainContainer id="about">
                    <AboutSectionH1>About</AboutSectionH1>
                    <AboutSectionPContainer>
                        <AboutSectionP>
                        Jhn Doe. is an up and coming rapper out of the Salt Lake Valley in Utah. His journey to becoming a rapper is not the typical one, while he's always loved consuming music and was particularly fond of rap/hip-hop, music hasn't always been something he's been interested in making, in fact, it wasn't even on his radar until his mid 20s. Focusing on a career in IT through his early adult years, it wasn't until 2018 where the start of what would become Jhn Doe. would begin.​​ Looking for a way to process the traumatic events in his life, he discovered that writing about these tragedies helped him to heal in a way. 
                        <br />
                        <br />
                        In the middle of 2020, after having found rap music as a way to process his experiences in this realm called life, he decided to start taking music seriously. Touching on all aspects of life through his music; themes in his music include everything from raging against the system to being able to conquer oneself and ones pain, his music revolves around one key theme, to be able to break the chains that keep us down whether they be mental, societal, spiritual, etc.​​
                        <br />
                        <br />
                        The biggest artistic inspirations he draws from currently are, Run The Jewels, Vince Staples, J.Cole, Kendrick Lamar, and Eminem. Jhn Doe. writes and engineers all of his music, while he does produce as well, his production skills aren't the best at the moment so you will mostly find him rapping over more talented producer's beats.
                        </AboutSectionP>
                    </AboutSectionPContainer>
            </AboutSectionMainContainer>
        </>
    )
}

export default AboutSection
