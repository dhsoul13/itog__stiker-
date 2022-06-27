import { Router }  from "express";
import valid, { validationResult } from "express-validator";
import authMidd from '../middlewares/auth-midd.js'
import { Register } from "./Register/index.js";
import { activeLink } from "./ActiveLink/index.js";
import { Login } from "./Login/index.js";
import { Logout } from "./Logout/index.js";
import { Refresh } from "./Refresh/index.js";
import { GetUser } from "./GetUser/index.js";
import { AddNewAdvertisement } from "./AddNewAdvertisement/index.js";


const router = Router()

/// регистрация 
router.post('/register',
            [
                valid.check('email', 'Некорректный email').isEmail().exists(),
                valid.check('name', 'Некорректное имя').exists(),
                valid.check('password', 'Некорректный пароль').isLength({min: 6}).exists(),
            ],
            Register
            );
/// активация регистрации 
router.get('/activate/:link', 
            activeLink
)
/// логин   
router.post('/login',  
[
    valid.check('email', 'Некоретный email').normalizeEmail().isEmail(),
    valid.check('password', 'Некоретный password').exists(),
],
Login
)
/// разлогирование
router.post('/logout',
Logout
)
/// обновление рефреш токина
router.get('/refresh', 
Refresh
)
/// обновление выдача всех юзеров
router.get('/users',authMidd, 
GetUser)

/// добавление объявления

router.post('/addAdvertisment', 
[
    valid.check('email', 'Некорректный email').isEmail().exists(),
    valid.check('title', 'Неуказано название').exists(),
    valid.check('subtitle', 'Неуказано описание').exists(),
    valid.check('price', 'Неуказана цена').exists(),
    valid.check('city', 'Неуказано местоположение').exists(),
    valid.check('password', 'Некорректный пароль').isLength({min: 6}).exists(),
],
AddNewAdvertisement)


export default router