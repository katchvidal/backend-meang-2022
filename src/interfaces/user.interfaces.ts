import { ObjectId } from "mongodb";


export interface IUser {
    _id? : string | ObjectId ;
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    birthDay?: string;
    createAT?: string;
    role?: string;
}