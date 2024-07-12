const express=require('express');
const app=new express();
const PORT=4001;
const employeeModel=require('./model/employeeData');
require('./connection');
//fetch data
app.get('/employees',async(req,res)=>{
    try {
        const data=await employeeModel.find();
        res.sent(data)
    } catch (error){
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log('server is running on PORT 4000')
})
