import React from 'react';
import {useStore} from "../../context/store";
import {AlbumComponent} from "./AlbumComponent";

const AlbumsComponent = () => {
    const {albumStore: {allAlbums}} = useStore();
    return (
        <div>
            {
                allAlbums.map(album =>  <AlbumComponent key={album.id} album={album}/> )
            }

        </div>
    );
};

export {AlbumsComponent};
