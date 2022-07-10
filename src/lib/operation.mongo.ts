import { Db } from "mongodb"; //    Permite hacer operaciones con mongodb
import { IPagination } from "../interfaces/pagination.interfaces";

export const findOneElement = async (
    database: Db,
    collection: string,
    filter: object
) => {
    return database.collection(collection).findOne(filter);
};


export const findElement = async (
    database: Db,
    collection: string,
    filter: object = {},
    paginationOption: IPagination = {
        page: 1,
        pages: 1,
        itemsPage: -1,
        skip: 0,
        total: -1,
    }
) => {
    if (paginationOption.total === -1) {
        return await database.collection(collection).find(filter).toArray();
    }
    return await database
        .collection(collection)
        .find(filter)
        .limit(Number(paginationOption.itemsPage))
        .skip(Number(paginationOption.skip))
        .toArray();
};


export const inserOneElement = async (
    database: Db,
    collection: string,
    document: object
) => {
    return database.collection(collection).insertOne(document);
};