import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bycrpt from "bcrypt"
import "dotenv/config"

const userSchema = new mongoose.Schema({
    username:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true //the field becomes searchable and more optomized in mongoDB 
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, //Cloudinary URL
        required: true
    },

    coverimage:{
        type: String //cloudinary URL
    },

    watchHistory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    },
    password:{
        type: String,
        required: [true, "Password must be strong"]
    },
    refreshToken:{
        type: String
    }
},{timestamps:true})

//Pre and Post Middleware
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = bycrpt.hash(this.password)
    next()
})

//Middleware methods to verify password and generating tokens
userSchema.methods.isPasswordCorrect = async function(password){
   return await bycrpt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function() {
return jwt.sign({
    // Payload
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    })
    process.env.ACCESS_TOKEN_SECRET 
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
}
userSchema.methods.generateRefreshToken = async function() {
return jwt.sign({
        _id: this._id,
    })
    process.env.REFRESH_TOKEN_SECRET
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
}
export const User = mongoose.model("User", userSchema);