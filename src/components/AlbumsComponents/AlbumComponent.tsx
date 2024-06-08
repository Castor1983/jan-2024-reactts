import React, {FC} from 'react';
import {IAlbumModel} from "../../models/IAlbumModel";

interface Iprops{
    album: IAlbumModel
}
const AlbumComponent: FC<Iprops> = ({album}) => {
    return (
        <div>
            {album.id}
            {album.userId}
            {album.title}
        </div>
    );
};

export {AlbumComponent};
