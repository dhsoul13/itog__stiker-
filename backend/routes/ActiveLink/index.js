import User from "../../modules/User.js";
import config from 'config';
import { ApiError } from "../../exceptions/error.js";


export const activeLink = async(req, res)=>{
    try {
        //вытаскиваем линк из url-адреса
        const activateLink = req.params.link;

        // поиск по линку в бд
        const user = await (User.findOne({activateLink}));

         // выкидываем ошибку если не найденно
        if(!user){
            throw new ApiError.RequestError("Ошибка")
        }

        // замена значения
        user.isActivated = true;
        // сохраняем
        await user.save();
        // редирект
        // res.redirect("https://github.com/dhsoul13/React_itog");
         // res.redirect(config.get("CLIENT_URL"))
        return res.status(200).json({messange: "Успешное поддтверждение email"})
    } catch(e) {
        console.log(e);
        return res.status(500).json({messange: "Неуспешное поддтверждение email"})
    }
}