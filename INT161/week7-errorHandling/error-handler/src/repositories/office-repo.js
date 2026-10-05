import db from '../configs/db-config.js'
import {successFormat} from "./success-format.js";

const TABLE_NAME = "offices"
const ENTITY_NAME = "Offices"

const FIND_ALL_SQL = `SELECT * FROM ${TABLE_NAME}`
const FIND_ONE_SQL = `SELECT * FROM ${TABLE_NAME} WHERE officeCode = ?`
const UPDATE_SQL = `UPDATE ${TABLE_NAME} SET ? WHERE officeCode = ?`
const REMOVE_SQL = `DELETE FROM ${TABLE_NAME} WHERE officeCode = ?`
const CREATE_SQL = `INSERT INTO ${TABLE_NAME} SET ?`


const data = {
    officeCode: '111110',
    city: 'Sans',
    phone: '+1 6510 219 4782',
    addressLine1: '100 Market Street',
    addressLine2: 'Suite 300',
    state: 'CA',
    country: 'USA',
    postalCode: '94080',
    territory: 'NA'
}

const data1 = {
    officeCode: '111110',
    city: 'SansS',
    phone: '+1 6510 219 4782',
    addressLine1: '100 Market Street',
    addressLine2: 'Suite 300',
    state: 'CA',
    country: 'USA',
    postalCode: '94080',
    territory: 'NA'
}

// const successFormat = {
//     "status": "success",
//     "data": {}// หรือ [ ... ] กรณีผลลัพธ์เป็น Array
// }

export async function findAll() {
    const [datas] = await db.query(FIND_ALL_SQL)
    return {...successFormat, data:datas}
}


export async function findOne(id) {
    const [data] = await db.query(FIND_ONE_SQL, [id])
    if (!data || data.length === 0) {
        return null; // Return null so the service can handle the business logic
    }
    return {...successFormat, data:data[0]}
}

export async function update(id, data) {
    await findOne(id)
    await db.query(UPDATE_SQL, [data, id])
    return findOne(id)
}

export async function remove(id) {
    await findOne(id)
    const [data] = await db.query(REMOVE_SQL, [id])
    return {...successFormat, data:data}
}

export async function create(data) {
    const [result] = await db.query(CREATE_SQL, [data])
    const id =  data.officeCode ?? result.insertId
    return findOne(id)
}

// console.log(await create(data))