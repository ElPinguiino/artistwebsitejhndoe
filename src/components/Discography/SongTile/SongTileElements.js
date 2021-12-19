import styled from 'styled-components';

export const SongTileMainContainer = styled.div`
    margin-top: 10rem;
    margin-left: 8rem;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 480px) {
        margin-top: 6rem;
        margin-left: 3rem;
    }
`

export const SongTileItem = styled.div`
    margin: 1rem;
`

export const SongTileImage = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 20px;
`

export const SongTileH3 = styled.h3`
    color: white;
`