import User from "../models/usermodel.js";
import bcryptjs from 'bcryptjs';

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