const app = require('express').Router()
const fs = require('fs')
let db = require('../db/db.json');

app.get("/api/notes",function(req,res){
    db = JSON.parse(fs.readFileSync("db/db.json")) || []
    console.log("Display all notes",db);
    res.json(db)
});

app.post("/api/notes",function(req,res){
    let newNote = {
        id: Math.floor(Math.random() * 9999),
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNote)
   fs.writeFileSync("db/db.json",JSON.stringify(db),function(error){
       if (err)throw error
   })
    console.log("Add New Note",db);
    res.json(db)
});

app.delete("/api/notes/:id",function(req,res){
    let updatedNote = db.filter(element => element.id != req.params.id)
  
   db = updatedNote
   fs.writeFileSync("db/db.json",JSON.stringify(db),function(error){
       if (err)throw error
   })
    console.log("Add New Note",db);
    res.json(db)
});

module.exports = app;
