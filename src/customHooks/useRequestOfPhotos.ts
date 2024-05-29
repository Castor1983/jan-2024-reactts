import {useEffect, useState} from "react";
import {IPhotoModel} from "../models/IPhotoModel";
import {request} from "../services/api.service";

export const useRequestOfPhotos = () =>{
    const [photos, setPhotos] = useState<IPhotoModel[]>([])
    useEffect(() => {
request.photos.getAllPhotos().then(value => setPhotos(value.data))
    }, []);
    return photos
}
