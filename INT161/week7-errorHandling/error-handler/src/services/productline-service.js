import * as repo from "../repositories/productline-repo.js"
import {AppError} from "../middleware/errorHandler.js";

const data = {
        productLine: 'Classic SANSs',
        textDescription: 'SANSNSANSNAASNSANNA',
        htmlDescription: null,
        image: null
    }

export async function getObject(id) {
    return await repo.findOne(id)
}

export async function getAllObjects() {
    return await repo.findAll()
}

export async function createObject(data) {

    if (Object.keys(data).length === 0) {
        throw new AppError( "Field 'productLine' is required and cannot be empty", 400, "VALIDATION_ERROR");
    }

    const productLineObject = await getObject(data?.productLine)
    if (productLineObject) {
        throw new AppError( `Product line ${productLineObject.productLine} already exists`, 409, "DUPLICATE_KEY");
    }

    return await repo.create(data)
}

