import { ApiError } from "../exceptions/error.js";

const MiddlewareErr = (err, req, res, next) =>{
    console.log(err.messange)
    if(err instanceof ApiError){
        return res.status(err.status).json({
            staus: err.status,
            messange:err.message,
        })
    }

    return res.status(500).json({messange: "Непредвиденная ошибка"})
}

export default MiddlewareErr;