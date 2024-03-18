
const User = require('../models/user')
const test = (req,res)=>{
    res.json("Hello World");
}
const userRegister = async (req,res)=>{
    try {
        const {fname , lname , email ,password ,age , phone , selectgender ,address} = req.body;
        if(!fname || !lname || !email ||!password || !age || !phone || !selectgender || !address){
            return resizeTo.json({
                error : 'Please fill all the fields'
            });
        }
        if(!password || password.length<6){
            return res.status(400).json({
                error : 'Fill psswd and Password must be at least 6 characters'
            });
        }
        const exist = await User.findOne({email});
        if(exist){
            return res.status(400).json({
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
module.exports = {
    test , userRegister
}