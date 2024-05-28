import {IUserModel} from "../userModels/IUserModel";

export interface IUsersResponseModel {
    limit: number,
    skip: number,
    total: number,
    users: IUserModel[]
}
