const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const router = require('./routes/messages_router')

const dbConn = 'mongodb://localhost/chatti_db'

mongoose.connect(
    dbConn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useFindAndModify: false
    },
    err => {
        if (err){
            console.log("Connection error with the db", err)
        }else{
            console.log("Connected to the database")
        }
    }
)

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

app.use("/", router)


app.listen(port, ()=>{console.log(`Server running on port ${port}...`)})

