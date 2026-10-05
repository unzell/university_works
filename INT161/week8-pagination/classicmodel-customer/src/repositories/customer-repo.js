import db from '../configs/db-config.js'

const TABLE_NAME = "customers"
const ENTITY_NAME = "Customers"

const FIND_ALL_SQL = `SELECT * FROM ${TABLE_NAME}`
const PAGINATOR_SQL =  `${FIND_ALL_SQL} LIMIT ? OFFSET ?`
const FIND_ONE_SQL = `SELECT * FROM ${TABLE_NAME} WHERE customerNumber = ?`
const UPDATE_SQL = `UPDATE ${TABLE_NAME} SET ? WHERE customerNumber = ?`
const REMOVE_SQL = `DELETE FROM ${TABLE_NAME} WHERE customerNumber = ?`
const CREATE_SQL = `INSERT INTO ${TABLE_NAME} SET ?`

export async function findAll(pagination=null) {
    if (!pagination) {
        const [data] = await db.query(FIND_ALL_SQL);
        return data;
    }
    const { limit , offset } = pagination;
    const [ data ] = await db.query(PAGINATOR_SQL, [ limit, offset ])
    return data

}

export async function findOne(id) {
    const [data] = await db.query(FIND_ONE_SQL, [id])
    if (data.length === 0) {
        const err = new Error(`${ENTITY_NAME} not found for id = ${id}`)
        err.statusCode = 404
        err.code = "NOT FOUND"
        throw err
    }
    return data[0]
}

export async function update(id, data) {
    await findOne(id)
    await db.query(UPDATE_SQL, [data, id])
    return findOne(id)
}

export async function remove(id) {
    await findOne(id)
    const [data] = await db.query(REMOVE_SQL, [id])
    return data
}

export async function create(data) {
    const [result] = await db.query(CREATE_SQL, [data])
    return findOne(result.insertId)
}