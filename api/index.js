const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Jeff:Kjw789jj@neumann.reses.mongodb.net/neumann?retryWrites=true&w=majority"
).then(()=> console.log('db connection successful!')).catch((err)=> console.log(err))


app.listen(5000, () => {
    console.log("Backend server is running!")
})