import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

interface Iprops {
    car: ICarWithAuthModel
}
const CarComponent: FC <Iprops> = ({car}) => {
    return (
        <div>
            {car.id} {car.brand}
        </div>
    );
};

export {CarComponent};
