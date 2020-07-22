const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth.mid.js');

const productCtrl = require('../controllers/product.controller');


router.get('/all', productCtrl.get_all_products);
router.get('/:id', productCtrl.product_details);


router.post('/create', auth, productCtrl.product_create);

router.put('/update/:id', auth, productCtrl.product_update);

router.delete('/delete/:id', auth, productCtrl.product_delete)

module.exports = router;