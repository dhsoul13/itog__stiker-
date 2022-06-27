import * as TokenServis from '../../servirs/token-servies.js'

export const Logout = async(req, res)=>{
    try {
        const {refreshToken} = req.cookies;
        const token = await TokenServis.removeToken(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token)
    } catch(e){
        return res.status(500).json({Messange: 'Ошибка'})
    }
}