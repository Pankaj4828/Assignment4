const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 5000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.set('view','./views')
app.set('view engine','ejs')

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// your code goes here
app.post('/Addition',(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    sum=Number(num1)+Number(num2)
    if(isNaN(num1) || isNaN(num2) )
    {
        res.send("Invalid data types")
    }else if(num1>1000000 || num2>1000000 || sum>1000000 )
    {
        res.send("overflow")
    }else if(num1<-1000000 || num2<-1000000 || sum<-1000000 )
    {
        res.send("underflow")
    }
    else{
        res.status(200).send({ status: "success",
   message: "the sum of given two numbers", 
  sum: Number(num1)+Number(num2)}) 
    }
   
  
})
app.post('/Subtraction',(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    difference=Number(num1)-Number(num2)
    if(isNaN(num1) || isNaN(num2) )
    {
        res.send("Invalid data types")
    }
    else if(num1>1000000 || num2>1000000 )
    {
        res.send("overflow")
    }
    else if(num1<-1000000 || num2<-1000000 || sum<-1000000 )
    {
        res.send("underflow")
    }else{
        res.status(200).send({ status: "success",
   message: "the difference of given two numbers", 
   difference:Number(num1)-Number(num2)}) 
    }
   
 
})
app.post('/Multiplication',(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    result= Number(num1)*Number(num2)
    if(isNaN(num1) || isNaN(num2) )
    {
        res.send("Invalid data types")
    }else if(num1>1000000 || num2>1000000)
    {
        res.send("overflow")
    }else if(num1<-1000000 || num2<-1000000 || result<-1000000 )
    {
        res.send("underflow")
    }else{
        res.status(200).send({ status: "success",
   
        message: "The product of given numbers", 
        result: Number(num1)*Number(num2)}) 
    }
    
   
   

})
app.post('/Division',(req,res)=>{
    num1=req.body.num1;
    num2=req.body.num2;
    result= Number(num1)/Number(num2)
    if(num2 == 0)
   {
    res.send("Cannot divide by zero");
    
   }else if(isNaN(num1) || isNaN(num2) )
   {
       res.send("Invalid data types")
   }else if(num1>1000000 || num2>1000000 )
   {
       res.send("overflow")
   }else if(num1<-1000000 || num2<-1000000 || result<-1000000 )
   {
       res.send("underflow")
   }else{
   res.status(200).send({ status: "success",
   message: "The division of given numbers", 
   result: Number(num1)/Number(num2)}) 
   }
})
app.get('/form',(req,res)=>{
    res.render('form.ejs')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;