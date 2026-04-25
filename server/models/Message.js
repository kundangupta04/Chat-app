import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    receiverId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    text: {trype: String},
    image: {trype: String},
    iamge: {trype: Boolean, default: false},

}, {timestamps: true})

const Message = mongoose.model("Message", MessageSchema);

export default Message;