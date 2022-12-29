import express from "express";
import dotenv from 'dotenv'
import Connection from './database/db.js'
import Routes from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()
dotenv.config()
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))


app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))




app.use('/',Routes)



const port=8000
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD


Connection(username,password)
app.listen(port,()=>console.log("Server running"))
