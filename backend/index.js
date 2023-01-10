const express = require('express');
const cors = require('cors');
const db = require('./connection/db');
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
        const {date} = req.body;

        let sql = `INSERT INTO contact_user_form(name, email, profile, ideias, date) values (?,?,?,?,?)`

        db.query(sql, [name, email, profile, ideias, date], (err, result)=>{
            res.send(result).status(200)
        })
    }catch(err){
        res.status(500).send(controllerBD.conectionFailures)
    }
})

db.connect((erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log(controllerBD.connectionSucessful)

        app.listen(8080, ()=>{
            console.log('listening on port 8080')
        })
    }
})