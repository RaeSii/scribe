const express = require('express');
const { uptime } = require('process');
const PORT = process.env.PORT||3000 ;
const app = express()
const api = require("./routes/api_routes");
const html = require("./routes/html_routes")

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.use(api)
app.use(html)

app.listen(PORT,function(){
    console.log("App is listening on the PORT")
})