const express=require('express')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app=express();
const cors=require('cors')

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use(cors())

dotenv.config();
//routes

const router=require('./routes/product.route.js')
app.use('/',router);

const router2=require('./routes/user.route.js')
app.use('/users',router2);

//test api
app.get('/',(req,res)=>{
    res.json({message:'hello'})
})
const { API_PORT } = process.env;
//console.log(API_PORT)
const port = process.env.PORT || API_PORT;
//const port=process.env.PORT || 5050;

app.listen(port,()=>{
    console.log(`Server listen at port ${port}`)
})