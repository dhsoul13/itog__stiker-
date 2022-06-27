import Jwt  from "jsonwebtoken";
import config from 'config';

export const validAccessTokin = (tokin)=>{
    try{
        const userDate = Jwt.verify(tokin,  config.get('key'));
        return userDate;
    } catch(e){
        return null
    }
}  

export const validRefreshTokin = (tokin)=>{
    try{
        const userDate = Jwt.verify(tokin,  config.get('key_ref'));
        return userDate;
    } catch(e){
        return null
    }
}  