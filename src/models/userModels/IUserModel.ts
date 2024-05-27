type IHairType = {
    color: string,
    type: string
}
type ICoordinatesType = {
    lat: number,
    lng: number
}
type IAdressType = {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: ICoordinatesType,
    country: string
}
type IBAnkType = {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}
type ICompanyType = {
    department: string,
    name: string,
    title: string,
    address: IAdressType
}
type ICryptoType = {
    coin: string,
    wallet: string,
    network: string
}
export interface IUserModel {
    id: number,
    firstName: string
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height:number,
    weight: number,
    eyeColor: string,
    hair: IHairType,
    ip: string,
    address: IAdressType,
    macAddress: string,
    university: string,
    bank: IBAnkType,
    company: ICompanyType,
    ein: string,
    ssn: string,
    userAgent: string
    crypto: ICryptoType,
    role: string
}
