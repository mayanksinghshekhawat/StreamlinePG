const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const propertyRoutes = require('./routes/propertyRoutes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;
const {mongoose} = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{

}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log(e);
})
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use('/', require('./routes/authRoutes'));
app.use('/api/property', propertyRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
