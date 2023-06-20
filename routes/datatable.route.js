const multer = require('multer');
const datatablecontroller = require("../controllers/datatable.js");
const router = require('express').Router();




//const upload = multer({ storage: storage })

//router.post('/addproduct', upload.single('product_img'), productcontroller.addproduct);
//router.post('/addproduct',productcontroller.addproduct);

router.get('/displaydata', datatablecontroller.displaydata);

//router.delete('/deleteproduct/:id', productcontroller.deleteproduct);

module.exports = router;