import valid, { validationResult } from "express-validator";
import User from "../../modules/User.js";
import bcrypt from 'bcrypt';
import * as TokenServis from '../../servirs/token-servies.js'
import UserDto from "../../dltos/user-dltos.js";

export const Login = async (req, res)=>{
    try{
        ///Если произошла ошибка валидации у middleware
        const error = valid.validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                error: error.array(),
                messange: '2'
            })
        }

        /// Получает из тела запроса email и password
        
        const {email, password} = req.body;

         /// Поиск user в базе данных

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                Messange: 'Такого нет пользователя'
            })
        }

        /// Расхэширование пароля
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                Messange: 'Неверный пароль'
            })
        }
        
        /// Генирация токина
        const tokens = TokenServis.generateTokens({...UserDto(user)});
        await TokenServis.saveToken(UserDto(user).id, tokens.refreshToken);
        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.json({
            ...tokens, 
            user: UserDto(user)
        })
    } catch(e){
        console.log(e);
        return res.status(500).json({Messange: 'Ошибка'})
    }
}