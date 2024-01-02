import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import initApiRoutes from './routes/api.js'
const PORT = process.env.PORT || 8082
const react_url = process.env.REACT_URL
const mongodb_url = process.env.MONGODB_URL

const app = express()

app.use(express.json())
app.use(cors({
    origin: react_url,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

initApiRoutes(app)

mongoose
    .connect(mongodb_url)
    .then(() => {
        app.listen(PORT, () => {
            console.log('server is running: ', PORT)
        })
    })
    .catch((e) => {
        console.log(e)
    })