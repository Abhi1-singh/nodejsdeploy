const express = require('express')
const app =express()
app.get('/api/get',(req,res)=>{
res.send({message:'server is running'})
})
app.listen(6666, ()=>{
    console.log('server is running 6666')
})