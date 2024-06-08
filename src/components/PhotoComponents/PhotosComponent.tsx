import React from 'react';
import {PhotoComponent} from "./PhotoComponent";
import {useStore} from "../../context/store";

const PhotosComponent = () => {
    const {photoStore:{allPhotos}} = useStore();
    return (
        <div>
            {
                allPhotos.map(photo => <PhotoComponent key={photo.id} photo={photo}/> )
            }

        </div>
    );
};

export {PhotosComponent};
