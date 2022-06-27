import * as  refreshServies from "../../servirs/refresh-servirs.js"

export const Refresh = async(req, res)=>{
    try{
        const {refreshToken} = req.cookies;
        const tokens = await refreshServies.refresh(refreshToken, res); 
        if(tokens.refreshToken){
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.status(200).json(tokens);
        } else{
            return res.status(400).json({Messange: 'Не авторизован'});
        }
    }catch(e){
        return res.status(500).json({Messange: 'Ошибка'});
    }
}