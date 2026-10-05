import * as repo from '../repositories/customer-repo.js'
import { AppError} from "../middleware/errorHandler.js";

export async function findOne(id) {
    return await repo.findOne(id)
}

export async function remove(id) {
    if (!await findOne(id)) {
        throw new AppError('customer do not exist',404, "CUSTOMER_NOT_FOUND")
    }
    return await repo.remove(id)
}
