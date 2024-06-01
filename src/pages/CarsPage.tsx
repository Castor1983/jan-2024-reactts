import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {CarsComponent} from "../components/CarsComponent";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuthModel[]>([])
    useEffect(() => {
        carService.getCars().then((value) => console.log(value.items))
    }, []);
    return (
        <div>
            {
              //cars.map(car=> <CarsComponent key={car.id} car={car}/>)
            }
        </div>
    );
};

export {CarsPage};
