
type IAdressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeoType
}
type IGeoType = {
    lat: string,
    lng	: string,
}
type ICompanyType = {
    name: string,
    catchPhrase: string,
    bs: string,
}
export interface IUserModel {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAdressType,
    phone: string,
    website: string,
    company: ICompanyType
}
