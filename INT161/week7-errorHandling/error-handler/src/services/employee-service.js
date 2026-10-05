import * as repo from '../repositories/employee-repo.js'
import {AppError} from "../middleware/errorHandler.js";
import * as officeService from "../services/office-service.js"

export async function getOne(id) {
    return await repo.findOne(id)
}

export async function getAll() {
    return await repo.findAll()
}

export async function update(id, data) {
    const employee = await getOne(id)


    if (!employee.data) {
        throw new AppError (`Employee with ID ${id} was not found`, 404, "EMPLOYEE_NOT_FOUND")
    }

    const emailRegEx =  /^[A-Za-z0-9.]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    if (!emailRegEx.test(data.email)) {
        throw new AppError (`Invalid email address format`, 400,  "INVALID_EMAIL")
    }

    // if officeCode or reportsTo doesn't exist, mysql throws ER_NO_REFERENCED_ROW_2 automatically and middleware catches it
    return await repo.update(id, data)
}
