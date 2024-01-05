import express from "express";
const morgan = require('morgan')
import compression from "compression";
const app = express();
const mongoose = require('mongoose')
import cors from "cors";
import router from "./router";

app.use(morgan('dev'))
.use(cors({
    credentials:true
}))
.use(compression())
.use(express.json())
.use(express.urlencoded({extended: true}))



app.listen(4000, ()=> console.log("Server running on port 4000 is ok"))

const MONGO_URL = "mongodb+srv://mahmoud_zakaria:ZxQYtV3yJPdvY62P@cluster0.lnyyjw9.mongodb.net"

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(()=> console.log('MongoDB connecter'))
mongoose.connection.on("error", (error: Error) => console.log(error)); 

app.use('/', router())