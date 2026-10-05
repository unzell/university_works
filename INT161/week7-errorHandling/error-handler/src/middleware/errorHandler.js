// middleware/errorHandler.js
class AppError extends Error {
    constructor(message, statusCode, errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
    }
}

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let errorCode = err.errorCode || 'INTERNAL_SERVER_ERROR';
    let message = err.message || 'An unexpected error occurred';

    // ตรวจจับและแปลง MySQL Error Codes เป็น Client Error
    if (err.code === 'ER_DUP_ENTRY') {
        statusCode = 409;
        errorCode = 'DUPLICATE_KEY';
        message = 'Resource already exists (Primary key or unique constraint violation)';
    } else if (err.code === 'ER_NO_REFERENCED_ROW_2') {
        statusCode = 400;
        errorCode = 'FOREIGN_KEY_NOT_FOUND';
        message = 'Referenced foreign key record does not exist';
    } else if (err.code === 'ER_ROW_IS_REFERENCED_2') {
        statusCode = 409;
        errorCode = 'RESOURCE_IN_USE';
        message = 'Cannot delete or modify resource because it is referenced by related records';
    }

    res.status(statusCode).json({
        status: 'error',
        error: {
            code: errorCode,
            message: message
        }
    });
};

export { AppError, errorHandler };