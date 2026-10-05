import * as services from '../services/employee-service.js';
import express from "express";

const router = express.Router();

router.put('/:employeeNumber', async(req, res, next) => {
   const id = req.params.employeeNumber
   const updatedEmployeeData = req.body
   const result = await services.update(id, updatedEmployeeData);
   res.status(201).json(result)
});


export default router
