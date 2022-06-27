import User from "../../modules/User.js";

export const GetUser = async(req, res)=>{
    try{
        const users = await User.find();
        return res.json(users)
    } catch(e){
        return res.status(500).json({Messange: 'Ошибка'});
    }
}