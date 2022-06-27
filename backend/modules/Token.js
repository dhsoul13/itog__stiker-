import mongoose from "mongoose";
import Types from "mongoose";


const schema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    refreshToken: {type: String, require: true},

})

const send = mongoose.model('Token', schema);

export default send;