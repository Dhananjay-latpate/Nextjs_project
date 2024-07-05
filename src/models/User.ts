import mongoose, {Schema, Document } from "mongoose";


export interface Message extends Document {
    content: string,
    createAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: { type: String, required: true },
    createAt: { type: Date, required: true, default: Date.now }
})


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifycode: string;
    verifycodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}




const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required:[true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "please enter valid email address"]

    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    verifycode: {
        type: String,
        required: [true, "verifycode is required"]
    },
    verifycodeExpiry:{
        type: Date,
        required:[true, "verify code expiry required"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]

    })

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel