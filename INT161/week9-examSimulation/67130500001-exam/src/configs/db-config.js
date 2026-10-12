import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pasokon787898',
    database: 'mobile_distributor',
})
export default db