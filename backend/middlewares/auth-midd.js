import * as tokenValid from "../servirs/valid-tokin.js"
import {ApiError} from "../exceptions/error.js"

const authMidd =  function(req, res, next) {
    try{
        const auth = req.headers.authorization;
        if(!auth){
            return next(ApiError.unAuthError());
        }
        const accessToken = auth.split(' ')[1];
        if(!accessToken){
            return next(ApiError.unAuthError());
        }
        const userDate = tokenValid.validAccessTokin(accessToken);
        if(!userDate){
            return next(ApiError.unAuthError());
        }
        req.user = userDate;
        next();
    } catch (e) {
        throw next(ApiError.unAuthError());
    }
}

export default authMidd