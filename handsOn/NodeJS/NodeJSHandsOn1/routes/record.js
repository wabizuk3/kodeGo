//import
const express = require('express')
const recordRouter = express.Router()

recordRouter.get('/getApi', (req, res)=>{
    res.send(`<h2>THIS IS FROM A ROUTE OF RECORDS</h2>`)
})