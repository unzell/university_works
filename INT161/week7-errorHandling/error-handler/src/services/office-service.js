import * as repo from "../repositories/office-repo.js"
import {AppError} from "../middleware/errorHandler.js";

export async function getObject(id) {
    const office = await repo.findOne(id);

    if (!office) {
        throw new AppError(`Office with code '${id}' was not found`,404,'OFFICE_NOT_FOUND');
    }

    return office
}

export async function getAllObjects() {
    return await repo.findAll()
}

export async function updateObject(id, data) {
    return await repo.update(id, data)
}

export async function removeObject(id) {
    return await repo.remove(id)
}

export async function createObject(data) {
    return await repo.create(data)
}
