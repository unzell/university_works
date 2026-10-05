const error_map = {
    ER_DUP_ENTRY: {
        statusCode: 409,
        errorCode: "DUPLICATE_KEY",
        message: "Resource already exists (Primary key or unique constraint violation)"
    },
    ER_NO_REFERENCED_ROW_2: {
        statusCode: 400,
        errorCode: "FOREIGN_KEY_NOT_FOUND",
        message: "Referenced foreign key record does not exist"
    },
    ER_ROW_IS_REFERENCED_2: {
        statusCode: 409,
        errorCode: "RESOURCE_IN_USE",
        message: "Cannot delete or modify resource because it is referenced by related records"
    }

}

export class AppError extends Error {
    constructor(message, statusCode, ErrorCode) {
        super(message)
        this.statusCode = statusCode
        this.errorCode = ErrorCode
    }
}

export function errorHandler (err,req,res,next) {
    const dbError = error_map[err.code];

    const statusCode =  err.statusCode || dbError?.statusCode || 500;
    const errorCode =  err.errorCode || dbError?.code || err.code || 'INTERNAL_SERVER_ERROR';
    const message = dbError?.message || err.message || 'An unexpected error occurred';

    res.status(statusCode).json({
        status: "error",
        error: {
            code: errorCode,
            message: message
        }
    })
}