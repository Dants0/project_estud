const express = require('express');
const cors = require('cors');
const connection = require('./connection/db');
const controllerBD  = require('./controllers/controller');

const app = express()

app.use(express.json())
app.use(cors())

app.post('/contact', (req,res)=>{
    try{
        const {name} = req.body;
        const {email} = req.body;
        const {profile} = req.body;
        const {ideias} = req.body;

        let sql = `INSERT INTO contact_user_form(nome, email, profile, ideias) values (?,?,?,?)`

        connection.query(sql, [name, email, profile, ideias], (err, result)=>{
            res.send(result)
        })
    }catch(err){
        res.status(500)
    }
})

connection.connect((erro)=>{
    if(erro){
        console.log(controllerBD.conectionFailures)
    }else{
        console.log(controllerBD.connectionSucessful)

        app.listen(8080, ()=>{
            console.log('listening on port 8080')
        })
    }
})