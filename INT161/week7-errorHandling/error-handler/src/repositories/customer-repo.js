import db from '../configs/db-config.js'
import {successFormat} from "./success-format.js";


const TABLE_NAME = 'customers'

// const data =  {
//     customerNumber: 443,
//     customerName: 'Feuer Online Stores, Inc',
//     contactLastName: 'Feuer',
//     contactFirstName: 'Alexander ',
//     phone: '0342-555176',
//     addressLine1: 'Heerstr. 22',
//     addressLine2: null,
//     city: 'Leipzig',
//     state: null,
//     postalCode: '04179',
//     country: 'Germany',
//     salesRepEmployeeNumber: null,
//     creditLimit: '0.00'
// }
// console.log(await create(data))

const CREATE_SQL = `INSERT INTO ${TABLE_NAME} SET ?`
const FIND_ALL = `SELECT * FROM ${TABLE_NAME}`
const REMOVE_SQL = `DELETE FROM ${TABLE_NAME} WHERE customerNumber = ?`
const FIND_ONE = `SELECT * FROM ${TABLE_NAME} WHERE customerNumber = ?`

export async function findOne(id) {
    const [ [ result ] ] = await db.query(FIND_ONE, [ id ])
    return result
}

export async function create(data) {
    const [ result ] = await db.query(CREATE_SQL, [ data ])
    return result
}

export async function remove(id) {
    const [ result ] = await db.query(REMOVE_SQL, [ id ]);
    return {
        ...successFormat,
        data: {
            "message": "Customer record successfully deleted"
        }
    }
}


