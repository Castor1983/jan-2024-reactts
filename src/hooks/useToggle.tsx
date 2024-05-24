import {useState} from "react";
export interface IToggleModel{
    value: boolean
}
export const useToggle = () =>{
    const [value, setValue] = useState<any>({value: true});
    setValue({value: false})
    return value
}
