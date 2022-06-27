import generateUnicle from "generate-unique-id"
import AddAdvertisementData from "../../dltos/add-adver.js";
import User from "../../modules/User.js";
import date from 'date-and-time';
import { saveAddAdvertisement } from "../../servirs/add-servirs.js";

export const AddNewAdvertisement = async (req, res) =>{
    try{
        const now = new Date();
        const {email, title, subtitle, price, city, text, phone, teg} = req.body;
        const unicle = generateUnicle({
            length: 8,
          })
        const user = await User.findOne({email});
        const userDataId = AddAdvertisementData(user);
        const dataSend = {
            ...userDataId,
            title,
            article: unicle,
            subtitle,
            price,
            city,
            text,
            phone,
            teg,
            watch: 0,
            date: now,
            published: false
        }
        const status = await saveAddAdvertisement(dataSend);
        console.log(status);
        return res.status(200).json({messange: 'Успешно'})

    } catch(e){
        console.log(e);
        return res.status(500).json(e)
    }
}