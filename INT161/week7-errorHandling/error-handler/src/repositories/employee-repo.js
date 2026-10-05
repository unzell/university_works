import db from '../configs/db-config.js'
import {successFormat} from "./success-format.js";

const TABLE_NAME = "employees"
const ENTITY_NAME = "Employees"

const data =   {
    employeeNumber: 1703,
    lastName: 'the skeleton',
    firstName: 'sans',
    extension: 'x2312',
    email: 'mgerard@classicmodelcars.com',
    officeCode: '4',
    reportsTo: 1102,
    jobTitle: 'Sales Rep'
}


const FIND_ALL = `SELECT * FROM ${TABLE_NAME}`
const FIND_ONE = `SELECT * FROM ${TABLE_NAME} WHERE employeeNumber = ?`
const UPDATE_SQL = `UPDATE ${TABLE_NAME} SET ? WHERE employeeNumber = ?`
const CREATE_SQL = `INSERT INTO ${TABLE_NAME} SET ?`
const REMOVE_SQL = `DELETE FROM ${TABLE_NAME} WHERE employeeNumber = ?`

export async function findAll() {
    const [ result ] = await db.query(FIND_ALL);
    return {...successFormat, data:result};
}

export async function findOne(id) {
    const [ [ result ] ] = await db.query(FIND_ONE, [ id ]);
    return {...successFormat, data:result};
}


export async function update(id, data) {
    const [ result ] = await db.query(UPDATE_SQL, [ data, id ]);
    if (result.affectedRows > 0) {
        return  await findOne(id)
    }
    return null
}


export async function create(data) {
    const [ result ] = await db.query(CREATE_SQL, [ data ]);
    return result
}

export async function remove(id) {
    const [ result ] = await db.query(REMOVE_SQL, [ id ]);
    return result.affectedRows > 0
}

