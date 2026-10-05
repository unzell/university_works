import * as repo from '../repositories/payment-repo.js'
import * as customerService from '../services/customer-service.js'
import { AppError } from "../middleware/errorHandler.js";

export async function create(data) {
    if (!await customerService.findOne(data?.customerNumber)) {
        throw new AppError('customer do not exist',404, "CUSTOMER_NOT_FOUND")
    }

    const paymentRegEx = /^\d{4}-\d{2}-\d{2}$/
    if (!paymentRegEx.test(data.paymentDate)) {
        throw new AppError("paymentDate must be in ISO (YYYY-MM-DD)",400,"INVALID_PAYMENT_DATA")
    }

    if (! data.amount > 0) {
        throw new AppError("Payment amount must be greater than zero",400,"INVALID_PAYMENT_DATA")
    }


    return await repo.create(data)
}