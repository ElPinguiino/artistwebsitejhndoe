import React from 'react'
import { MusicPlayerMainContainer, RecordPlayerContainer, RecordPlayer, RecordLabel, StyledH2, StyledH3, RecordPlayerSpindle, ArmContainer, KnobWeightBottom, KnobWeightTop, RecordPlayerArm, PlayButton, RecordPlayerSpeaker, KnobVolumeBottom, Down, Up } from './MusicPlayerElements'

const MusicPlayer = () => {
    return (
        <>
            <MusicPlayerMainContainer>
                <RecordPlayerContainer>
                    <RecordPlayer>
                        <RecordLabel>
                            <StyledH2></StyledH2>
                            <StyledH3></StyledH3>
                        </RecordLabel>
                        <RecordPlayerSpindle />
                    <ArmContainer>
                        <KnobWeightBottom>

                        </KnobWeightBottom>
                        <RecordPlayerArm>

                        </RecordPlayerArm>
                        <KnobWeightTop>
                            <PlayButton>
                                <StyledH2></StyledH2>
                            </PlayButton>
                        </KnobWeightTop>
                    </ArmContainer>
                    <RecordPlayerSpeaker>
                        
                    </RecordPlayerSpeaker>
                    <KnobVolumeBottom>
                        <Down />
                        <Up />
                    </KnobVolumeBottom>
                    </RecordPlayer>
                </RecordPlayerContainer>
            </MusicPlayerMainContainer>
        </>
    )
}

export default MusicPlayer
