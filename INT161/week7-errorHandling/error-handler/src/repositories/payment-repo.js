import db from '../configs/db-config.js'
import { successFormat} from "./success-format.js";

const TABLE_NAME = 'payments'

const CREATE_SQL = `INSERT INTO ${TABLE_NAME} SET ?`
const FIND_ALL = `SELECT * FROM ${TABLE_NAME}`
const REMOVE_SQL = `DELETE FROM ${TABLE_NAME} WHERE customerNumber = ?`
const FIND_ONE = `SELECT * FROM ${TABLE_NAME} WHERE customerNumber = ?`

const data = {
    customerNumber: 999,
    checkNumber: 'NM916675',
    paymentDate: new Date(),
    amount: '32538.74'
}

export async function create(data) {
    const [ result ] = await db.query(CREATE_SQL, [ data ])
    return {...successFormat, data: data}
}

// console.log(await db.query(FIND_ALL))
// console.log(await create(data))
// console.log(await db.query(FIND_ONE, [ 999 ]))