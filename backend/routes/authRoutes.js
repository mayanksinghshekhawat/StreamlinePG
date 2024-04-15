const express = require('express');
const router =  express.Router();
const cors = require('cors');
const {test , userRegister , userLogin , getProfile ,houseForm,roomyForm}= require('../controllers/authControllers')
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

router.post('/signup', userRegister);
router.post('/login', userLogin);
router.post('/houseForm', houseForm);
router.post('/roomyForm', roomyForm);
router.get('/profile', getProfile);
module.exports = router;