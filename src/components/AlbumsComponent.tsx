import React from 'react';
import {useRequestOfAlbums} from "../customHooks/useRequestOfAlbums";

const AlbumsComponent = () => {
    const albums = useRequestOfAlbums()
    return (
        <div>
            {albums.map(album => <div>{album.title}</div>)}
        </div>
    );
};

export {AlbumsComponent};
