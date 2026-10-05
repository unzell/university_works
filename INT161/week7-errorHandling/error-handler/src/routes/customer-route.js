import * as service from '../services/customer-service.js'
import * as paymentService from '../services/payment-service.js'
import express from "express";

const router = express.Router()

router.post('/:id/payments', async (req, res, next) => {
    const paymentData = req.body
    const paymentResult = await paymentService.create(paymentData)
    res.status(201).json(paymentResult)
})


router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    const deleteResult = await service.remove(id)
    res.status(200).json(deleteResult);
})

export default router