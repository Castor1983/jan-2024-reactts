import React from 'react';
import {useRequestOfPhotos} from "../customHooks/useRequestOfPhotos";

const PhotosComponent = () => {
    const photos = useRequestOfPhotos()
    return (
        <div>
            {photos.map(photo => <div>{photo.title}</div>)}
        </div>
    );
};

export {PhotosComponent};
