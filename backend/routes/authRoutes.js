const express = require('express');
const router =  express.Router();
const cors = require('cors');
const {test , userRegister , userLogin , getProfile}= require('../controllers/authControllers')
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

router.get('/',test );
router.post('/signup', userRegister);
router.post('/login', userLogin);
router.get('/profile', getProfile);
module.exports = router;