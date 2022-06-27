import mongoose from "mongoose";
import Types from "mongoose";


const schema = mongoose.Schema({
    email: {type:String, required:true, unique: true },
    password: {type:String, required:true},
    name: {type:String, required:true},
    isAdmin: {type:Boolean, default: false},
    activationLink: {type: String},
    isActivated: {type:Boolean, default: false},
    links: [{type: Types.ObjectId, ref:"Data"}]
})

const send = mongoose.model('User', schema);

export default send;