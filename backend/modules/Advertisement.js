import mongoose from "mongoose";

const schema = mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
    article: {type:String, required: true, unique: true},
    title: {type:String, required: true},
    subtitle: {type:String, required: true},
    price: {type: Number, required: true},
    date: {type: Number, required: true},
    watch: {type: Number, required: true},
    teg: {type:String, required: true},
    city: {type:String, required: true},
    text: {type:String, required: true},
    published: {type: Boolean, required: true},
    phone: {type: Number, required: true}
})

const send = mongoose.model('Advertisement', schema);

export default send;