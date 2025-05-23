import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {type:String, reqired: true, unique:true},
    fullName: {type:String, reqired: true},
    password: {type:String, reqired: true, minlength:6},
    profilePic: {type:String, default:""},
    bio: {type:String},
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;