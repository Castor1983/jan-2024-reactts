import {useEffect, useState} from "react";
import {IAlbumModel} from "../models/IAlbumModel";
import {request} from "../services/api.service";

export const useRequestOfAlbums = () =>{
    const [albums, setAlbums] = useState<IAlbumModel[]>([])
    useEffect(() => {
request.albums.getAllAlbums().then(value => setAlbums(value.data))
    }, []);
    return albums
}
