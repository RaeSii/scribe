const express = require('express');
const { uptime } = require('process');
const PORT = process.env.PORT||3000 ;
const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));


app.listen(PORT,function(){
    console.log("App is listening on the PORT")
})