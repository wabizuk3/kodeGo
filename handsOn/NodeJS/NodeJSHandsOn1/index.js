//import
const express = require('express')
const bodyParser = require('body-parser')
const routeRecords = require('./routes/record.js')


const app = express();
//middleware


//routes
//get put post delete
// app.put()
// app.get()
// app.post()
// app.delete()

// app.get('/', (req, res)=>{
//     res.send(`<h1>Test Routes</h1>`)
// })

app.use('/record', routeRecords)




//check server activity
const port = 3000
app.listen(port, ()=>{
    console.log(`The port is now running/listening: ${port}`)
})

// console.log('test change')