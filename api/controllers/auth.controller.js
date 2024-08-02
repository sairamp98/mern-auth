import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) =>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    try{
        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        });
        res.status(201).json({
            msg: "User created successfully"
        })
    }
    catch(e) {
        next(e);
    }
}

export const signin = async(req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({
            email: email
        })
        if(!validUser){
            return next(errorHandler(404, "User not found"))
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(401, "Invalid credentilas"))
        }
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000)
        res.cookie('access_token', token, {httpOnly:true, expires: expiryDate}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}