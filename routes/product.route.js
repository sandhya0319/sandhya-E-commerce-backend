const multer = require('multer');
const productcontroller = require("../controllers/product.controller");
const router = require('express').Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

router.post('/addproduct', upload.single('product_img'), productcontroller.addproduct);
//router.post('/addproduct',productcontroller.addproduct);

router.get('/displaydata/:id', productcontroller.displaydata);

router.delete('/deleteproduct/:id', productcontroller.deleteproduct);

module.exports = router;