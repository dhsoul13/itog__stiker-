import bcrypt from 'bcrypt';
import valid, { validationResult } from "express-validator";
import Jwt  from "jsonwebtoken";
import config from 'config';
import * as MailService from "../../servirs/mail-servirs.js";
import * as TokenServis from '../../servirs/token-servies.js'
import UserDto from "../../dltos/user-dltos.js";
import User from "../../modules/User.js";
import * as uuid from "uuid"

export const Register = async (req, res) =>{
    try{
        /// Если произошла ошибка валидации у middleware
        const error = valid.validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                error: error.array(),
                messange: 2
            })
        }

        /// Вытаскиваем из тела заголовка данные

        const {email, password, name, isAdmin} = req.body;

        /// Ищем в базе данных user

        const candidate = await(User.findOne({email}));
        if(candidate){
            return res.status(400).json({
                messange: 1
            })
        }

        /// Хэширование пароля
        const hashPassword = await bcrypt.hash(password, 12);

        /// Отправка на почту ссылки для поддтверждения emails
        const activationLink = uuid.v4();
        MailService.sendActivationMail(email, `${config.get("API_URL")}/api/auth/activate/${activationLink}`);

        /// Создание новго юзера

        const user = await User.create({email, password: hashPassword, name, isAdmin,  activationLink});

        /// Создание токинов
        const tokens = TokenServis.generateTokens({...UserDto(user)});
        await TokenServis.saveToken(UserDto(user).id, tokens.refreshToken);
        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        await user.save();
        return res.json({
            ...tokens, 
            ...UserDto(user)
        })
    } catch(e){
        return res.status(500).json({Messange: 'Ошибка'})
    }
}