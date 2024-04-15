const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const cors = require('cors');
router.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));

router.post('/add', propertyController.addProperty);
router.get('/map',propertyController.fetchProperty);

router.put('/edit/:id', propertyController.editProperty);

router.delete('/delete/:id', propertyController.deleteProperty);

module.exports = router;