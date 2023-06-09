const express = require('express')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors')
const multer = require('multer');

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(cors())

dotenv.config();

app.use(express.static('public'));
app.use('/images', express.static(`${__dirname}/public/images`));

const router = require('./routes/product.route.js')
app.use('/products', router);

const router2 = require('./routes/register.route.js')
app.use('/users', router2);

const loginroute = require('./routes/login.route.js')
app.use('/users', loginroute);

const cartroute = require('./routes/cart.route.js')
app.use('/cart', cartroute);


//test api
app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})
const { API_PORT } = process.env;
//console.log(API_PORT)
const port = process.env.PORT || API_PORT;
//const port=process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server listen at port ${port}`)
})