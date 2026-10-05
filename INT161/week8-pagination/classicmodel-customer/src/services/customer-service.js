import * as repo from "../repositories/customer-repo.js"

export async function getObject(id) {
    return await repo.findOne(id)
}

export async function getAllObjects(pagination=null) {
    return await repo.findAll(pagination)
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
