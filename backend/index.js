import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import loginRouter from './Routes/LoginRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json({extended:true,limit:'2mb'}))
app.use(express.urlencoded({extended:true,limit:'2mb'}))
app.use(cors())

const port = process.env.PORT;
const url=process.env.CONNECTION_URL

app.get('/', (req, res) => {
    res.send('hi')
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log('Server listening on port:', port)
        })
    })
    .catch(err => console.log(err))

app.use('/', loginRouter) 
