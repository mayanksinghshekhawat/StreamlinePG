const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const PORT = 8000;
const {mongoose} = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Pgfinder',{

}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
})
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use('/', require('./routes/authRoutes'));
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
