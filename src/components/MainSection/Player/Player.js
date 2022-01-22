import React from 'react';
import AudioPlayer from 'react-h5-audio-player';


const Player = () => {
    return (
        <AudioPlayer
            autoPlay
            src="https://soundcloud.com/jhn-tho/sets/jhn-doe?si=d890334654224adb9296dc5ea5f26020&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            onPlay={e => console.log("onPlay")}
            // other props here
        />
    )
}

export default Player
