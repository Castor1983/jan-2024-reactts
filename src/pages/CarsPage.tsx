import React, {useEffect, useState} from 'react';
import {authService, carService} from "../services/api.service";
import {CarsComponent} from "../components/CarsComponent";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {PaginationComponent} from "../components/PaginationComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";

const CarsPage = () => {
   const [query, setQuery] =useSearchParams()
    const navigate = useNavigate()
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        prev: null,
        next: null,
        total_pages: 0,
        total_items: 0
    })
    useEffect(() => {
    const getCarsData = async () => {
        try {

            const response = await carService.getCars(query.get('page') || '1')

            if (response) {
                setCarsPaginatedObject(response)
            }
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {
                try {
                    await authService.refresh();
                } catch (e) {
                    return navigate('/')
                }
                const response = await carService.getCars(query.get('page') || '1')

                if (response) {
                    setCarsPaginatedObject(response)
                }
            }
        }
    }
    getCarsData();
    }, [query]);

    return (
        <div>
               <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent  next={carsPaginatedObject.next} prev={carsPaginatedObject.prev}/>

        </div>
    );
};

export {CarsPage};
