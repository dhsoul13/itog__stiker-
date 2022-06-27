import { ApiError } from "../exceptions/error.js";
import Advertisement from "../modules/Advertisement.js"

export const saveAddAdvertisement = async (data) => {
    try{
        const findAdd = await Advertisement.findOne({title: data.title});
        if(findAdd){
            return ApiError.RequestError('Такое объявление уже существует', 'err')
        }
        const send = await Advertisement.create(data);
        return send; 
    } catch(e){
        return e
    }
}


