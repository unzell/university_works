import fs from 'node:fs'

class AppError extends Error {
    errors = {404:'NOT_FOUND', 400:'BAD REQUEST', 409:'CONFLICT',
        500:'INTERNAL SERVER ERROR', 403:'FORBIDDEN', 401:'UNAUTHORIZED'}
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.error = this.errors[statusCode];
        this.isOperational = true; // Indicate if it's an expected operational error
        Error.captureStackTrace(this, this.constructor);
    }
}

function main(value=0) {
    console.log(a(value));
}
function a(value) {
    return b(value);
}
function b(value) {
    if (value > 0) {
        return ++value;
    }
    const data = fs.readFileSync('test.txt');
}

// main(); //without error handler
try {
    main(1);
    console.log('After main success');
    console.log('------------------');
    main();
    console.log('After main error');
} catch (e) {
    // console.log('Message: ', e.message);
    // console.log('Status: ', e.status);
    // console.log('Code: ', e.code);
    // console.log('Stack Trace: ', e.stack);
    const err = new AppError(e.message, 404);
    console.log(err);

}

console.log('Program was normal ended');