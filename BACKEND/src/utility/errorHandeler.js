//import { request , response , NextFunction } from "express";


export const errorHandeler =(err, req , res , next )=>{
console.log(`the error is ${err}`)  // testing error 
    if(err instanceof  AppError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }
        res.status(500).json({
            success: false,
            message: err.message||"Internal server error"
        })
}

export class AppError extends Error{
    statusCode; isOperatioinal;
    constructor(message , statusCode = 500 , isOperatioinal= true){
        super(message);
        this.statusCode = statusCode;
        this.isOperatioinal = isOperatioinal;
        Error.captureStackTrace (this , this.constructor);
    }
}

export class NotFoundError extends AppError{
    constructor(message = `resource not found`){
        super (message, 404)
    }
}
export class ConflictError extends AppError{
    constructor(message = `conflict occured`){
        super (message, 409)
    }
}
export class BadRequestError extends AppError{
    constructor(message = `bad request`){
        super (message, 400)
    }
}
export class UnauthorizedError extends AppError{
    constructor(message = `unauthorized`){
        super (message, 401)
    }
}

