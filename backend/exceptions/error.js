export class ApiError extends Error {
    status;
    errors;

    constructor(status, messange, errors=[]){
        super(messange);
        this.status = status;
        this.errors = errors;
    }

    static unAuthError(){
        return new ApiError(401, "Пользователь не авторизован")
    }

    static RequestError(messange, error){
        return new ApiError(400, messange, error)
    }
    
}