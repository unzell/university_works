import db from "../configs/db-config.js"
import {successFormat} from "./success-format.js";

const TABLE_NAME = "productlines";
const ENTITY_NAME = "productLines";

const FIND_ALL_SQL = `SELECT * FROM ${TABLE_NAME}`
const CREATE_SQL = `INSERT INTO ${TABLE_NAME} SET ?`


const data =  {
    productLine: 'Classic PAPI1',
    textDescription: 'SPAPAPAPAPAPAP',
}

export async function findAll() {
    const [ result ] =  await db.query(FIND_ALL_SQL);
    return result
}

export async function findOne(name) {
    const [ [result] ] =  await db.query(`SELECT * FROM ${TABLE_NAME} WHERE productLine = ?`, [ name ]);
    return result
}

export async function create(data){
    const [ result ] = await db.query(CREATE_SQL, [ data ])
    const prodLine = await findOne(data.productLine) ?? result.affectedRows > 0
    return {...successFormat, data: prodLine};
}


// console.log(await findOne('Classic SANS'))

