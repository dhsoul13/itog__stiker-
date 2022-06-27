import  jwt from "jsonwebtoken";
import config from 'config';
import Token from "./../modules/Token.js"

export const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, config.get('key'), {expiresIn: "5s"});
    const refreshToken = jwt.sign(payload, config.get('key_ref'), {expiresIn: "30d"});
    return {
        accessToken,
        refreshToken,
    }
}

export const saveToken = async (userId, refreshToken) =>{
    const tokenData = await Token.findOne({user: userId});
    if(tokenData){
        tokenData.refreshToken = refreshToken
        return tokenData.save()
    }
    const token =  await Token.create({user: userId, refreshToken: refreshToken})
    return token; 
}

export const removeToken = async (refreshToken) =>{
    const tokenData = await Token.deleteOne({refreshToken});
    return tokenData;
}


export const findTokin = async (refreshToken) =>{
    const tokenData = await Token.findOne({refreshToken});
    return tokenData;
}
