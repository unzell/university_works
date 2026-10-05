import express from 'express'
import customerRouter from './routes/customer-route.js'
import {errorHandler} from "./middlewares/errorHandler.js";

const app = express()
app.use(express.json())

const STUDENT_ID = '68130500044'
app.use(`/api/${STUDENT_ID}/`, customerRouter)

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})

app.use((err,req,res,next) => errorHandler(err,req,res,next))

// app.use((err, req, res, next) => {
//     // if (err.code == "ER_DUP_ENTRY") {
//     //     err.statusCode = 409
//     //     err.code = "CONFLICT"
//     // }
//     // const statusCode = err.statusCode || 500;
//     // res.status(statusCode).json({
//     //     status: statusCode,
//     //     error: err.code || 'Server Error',
//     //     message: err.message,
//     //     resource: req.originalUrl,
//     //     timestamp: new Date().toLocaleString()
//     // });
// })