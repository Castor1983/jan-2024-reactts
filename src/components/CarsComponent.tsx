import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const CarsComponent: FC<ICarWithAuthModel>= (car) => {
    return (
        <div>
            {car.brand}
        </div>
    );
};

export {CarsComponent};
