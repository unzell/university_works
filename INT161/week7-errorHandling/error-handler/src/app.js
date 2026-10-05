import express from 'express'
import officeRoute from './routes/office-route.js'
import productlineRoute from "./routes/productline-route.js";
import employeeRoute from "./routes/employee-route.js";
import customerRoute from "./routes/customer-route.js";
import {errorHandler} from "./middleware/errorHandler.js";

//1.1 - 1.3

const app = express()
app.use(express.json())


const STUDENT_ID = '68130500044'
app.use(`/api/${STUDENT_ID}/offices`, officeRoute) // 1 + 2.1
app.use(`/api/${STUDENT_ID}/productlines`, productlineRoute) // 2.2
app.use(`/api/${STUDENT_ID}/employees`, employeeRoute) // 2.3
app.use(`/api/${STUDENT_ID}/customers`, customerRoute)

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})

app.use((err, req, res, next) => {
    errorHandler(err,req,res,next);
    // if (err.code == "ER_DUP_ENTRY") {
    //     err.statusCode = 409
    //     err.code = "CONFLICT"
    // }
    // const statusCode = err.statusCode || 500;
    // res.status(statusCode).json({
    //     status: statusCode,
    //     error: err.code || 'Server Error',
    //     message: err.message,
    //     resource: req.originalUrl,
    //     timestamp: new Date().toLocaleString()
    // });
})

// 2
