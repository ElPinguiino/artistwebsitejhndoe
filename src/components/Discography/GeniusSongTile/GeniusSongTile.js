import React from 'react';
import { getLyrics, getSong } from 'genius-lyrics-api';

const GeniusSongTile = () => {

    const options = {
        apiKey: 'RCgq6fNSLOWc__Q4obIk59cH8PB8MRFVdnou0OCLBQCHkljGBdPdh7uIlqdwxf1h',
        title: 'Underdog',
        artist: 'Jhn Doe.',
        optimizeQuery: true
    };
    
    getLyrics(options).then((lyrics) => console.log(lyrics));
    
    getSong(options).then((song) =>
        console.log(`
        ${song.id}
        ${song.title}
        ${song.url}
        ${song.albumArt}
        ${song.lyrics}`)
    );



    return (
        <div>
        </div>
    )
}

export default GeniusSongTile
