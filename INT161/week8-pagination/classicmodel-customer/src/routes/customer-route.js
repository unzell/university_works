import * as service from "../services/customer-service.js"
import express from "express"

const router = express.Router()

router.get("/customers", async (req, res) => {
    console.log(req.pagination)
    const objects = await service.getAllObjects(req.pagination)
    res.json(objects)
})

router.get("/customers/:id", async (req, res) => {
    const id = req.params.id
    const object = await service.getObject(id)
    res.json(object)
})

router.post("/customers", async (req, res) => {
    const object = req.body
    const result = await service.createObject(object)
    res.status(201).json({result})
})
router.put("/customers/:id", async (req, res) => {
    const id = req.params.id
    const object = await service.updateObject(id, req.body)
    res.json(object)
})
router.delete("/customers/:id", async (req, res) => {
    const id = req.params.id
    await service.removeObject(id)
    res.status(204).end()
})

export default router