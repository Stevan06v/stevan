const express = require('express');
const server = express();
const fs = require('fs');

const PORT = 3000;


server.use(express.static('public'));


function read_data(type){
    


}


server.get('/ok', (req,res)=>{
    console.log("ok");
})

server.get('/skills', (req,res)=>{
    fs.readFile('./data/skills.json', (err, data) => {
        if (err) res.status(500).send("error occured while reading data...");
        let skillset = JSON.parse(data);
        res.send(JSON.stringify(skillset));
    });
})



server.listen(PORT,()=>{
    console.log("starting server....");

    console.log(`server is now listening at: http://localhost:${PORT}`)
})