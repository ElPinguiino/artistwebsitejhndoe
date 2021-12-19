import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SongTileMainContainer, SongTileItem, SongTileImage, SongTileH3 } from './SongTileElements';

const SongTile = () => {
    
    const [songs, setSongs] = useState([])

    const options = {
        headers: {
            'x-rapidapi-host': 'genius.p.rapidapi.com',
            'x-rapidapi-key': '100fe98584msh3cc3759f9aead09p18070ajsnfd70377b7ae1'
          }
    }

    const getSongs = async () => {
        const response = await axios.get('https://genius.p.rapidapi.com/artists/2829065/songs', options)
        setSongs(response.data.response.songs)
        console.log(response.data.response.songs[0])
        console.log(response.data.response.songs[1])
        console.log(response.data.response.songs[2])
        console.log(response.data.response.songs[3])
    }

    useEffect(() => {
        getSongs();
    }, [])
    
    return (
        <>
            <SongTileMainContainer>
            {songs.map((songs, index) => (
                <SongTileItem key={index}>
                    <a href={'https://genius.com'+ songs.path}>
                    <SongTileImage 
                        alt="album cover" 
                        src={songs.header_image_url} 
                        />
                    </a>
                    {/* <SongTileH3>{songs.title}</SongTileH3>
                    <SongTileH3>{songs.artist_names}</SongTileH3>
                    <SongTileH3>{songs.api_path}</SongTileH3> */}
                </SongTileItem>
                )
                )
            }
            </SongTileMainContainer>
        </>
    )
}

export default SongTile