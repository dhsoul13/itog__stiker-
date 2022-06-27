import * as tokinServies from "./token-servies.js"
import * as validateService from "./valid-tokin.js"
import User from "../modules/User.js";
import UserDto from "../dltos/user-dltos.js";

export const refresh = async (refreshToken)=> {
    try{
    if(!refreshToken){
        return new Error(401, 'Пользователь не авторизован')
    };

    const userDate = validateService.validRefreshTokin(refreshToken);
    const tokenFromDb= await tokinServies.findTokin(refreshToken);
    if(!userDate || !tokenFromDb){
        
        return new Error(401, 'Пользователь не авторизован')
    }

    const user = await User.findById(userDate.id)
    const tokens = tokinServies.generateTokens({...UserDto(user)});

    await tokinServies.saveToken(UserDto(user).id,tokens.refreshToken)
    
    return {
        ...tokens,
        user: UserDto(user)
    }
    } catch(e){
        return new Error(401, 'Пользователь не авторизован')
    }
}