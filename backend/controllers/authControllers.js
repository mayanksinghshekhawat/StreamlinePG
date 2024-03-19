
const User = require('../models/user')
const jwt = require('jsonwebtoken');

const test = (req,res)=>{
    res.json("Hello World");
}
const userRegister = async (req,res)=>{
    try {
        const {fname , lname , email ,password ,age , phone , selectgender ,address} = req.body;
        if(!fname || !lname || !email ||!password || !age || !phone || !selectgender || !address){
            return res.json({
                error : 'Please fill all the fields'
            });
        }
        if(!password || password.length<6){
            return res.json({
                error : 'Fill psswd and Password must be at least 6 characters'
            });
        }
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error : 'User already exist'
            });
        }
        const user = await User.create({fname , lname , email ,password, age , phone , selectgender ,address});
        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
    }
}

const userLogin = async(req, res) => {
    try {
        const {email , password} = req.body;
        console.log("Request Payload:", { email, password });
        if(!email || !password){
            return res.json({
                error : 'Please fill all the fields'
            });
        }
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error : 'User Does Not exist'
            });
        }
        let match = false;
        if(user.password == password){
            match = true;
        }
        if(match){
            jwt.sign({emial: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET , {} , (err, token) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                res.cookie('token', token).json(user);
            });
        }
        if(!match){
            return res.status(200).json({
                error : 'Wrong Email or Password'
            });
        }

    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    test , userRegister , userLogin
}