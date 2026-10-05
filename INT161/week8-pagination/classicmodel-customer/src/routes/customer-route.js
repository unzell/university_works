import * as service from "../services/customer-service.js"
import express from "express"

const router = express.Router()

router.get("/customers", async (req, res) => {
    const pagination = req.query;
    let { page, limit } = pagination;
    page = Math.max(1, parseInt(page, 10)) || 1;
    limit = Math.min(100, Math.max(parseInt(limit, 10),1)) || 10;
    const objects = await service.getAllObjects({page, limit})
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