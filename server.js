const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.get('/',(req,res)=>{
    res.send('hello NODE')
})

app.get('/blog',(req,res)=>{
    res.send('hello blog')
})

app.get('/products', async(req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products); 
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id',async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/products',async(req,res)=> {
   try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
   }
    catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
   }  
})

//update product
app.put('/products/:id', async(req,res) =>{
    try {
        const {id} =req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product) {
            return res.status(404).json({message:'cannot find any product with ID ${id}'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//delete product
app.delete('/products/:id', async(req,res) =>{
    try {
        const {id} =req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message:'cannot find any product with ID ${id}'})
        }
        //const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
 
mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://nbnitinbabubn28:1234567890@nitinapis.nvfsrcr.mongodb.net/?retryWrites=true&w=majority')
.then(()=> {
    console.log("connected to backend")
    app.listen(3000, () => {
        console.log("Node API is running now on 3000");
    })
    
}).catch((error)=> {
    console.log(error)
});