import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import {CarComponent} from "./CarComponent";

interface Iprops{
    cars: ICarWithAuthModel[]
}
const CarsComponent: FC<Iprops>= ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <CarComponent key={car.id} car={car}/>)
            }
        </div>
    );
};

export {CarsComponent};
