import * as services from '../services/productline-service.js'
import express from "express";

const router = express.Router();

router.post('/',async (req, res) => {
    const product = req.body;
    const result = await services.createObject(product);
    res.status(201).json(result);
})

export default router;