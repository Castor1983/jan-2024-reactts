import React, {FC} from 'react';
import {IPhotoModel} from "../../models/IPhotoModel";

interface Iprops{
    photo: IPhotoModel
}
const PhotoComponent: FC<Iprops> = ({photo}) => {
    return (
        <div>
            {photo.id}
            {photo.albumId}
            {photo.title}
            {photo.url}
            {photo.thumbnailUrl}
        </div>
    );
};

export {PhotoComponent};
