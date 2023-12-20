import express , {Application} from "express"
import mongoose from "mongoose"
import userRoutes from "./userRoutes"
import friendRoutes from "./friendRoutes"


import http from "http"
import {Server} from "socket.io"

const app:Application = express()
app.use(express.json())
app.use("/auth", userRoutes)
app.use("/chats", friendRoutes)


const port :number = 8888
const DB_URL ="mongodb://0.0.0.0:27017/socketIO"
const server = http.createServer(app)
const io = new Server(server , {
    cors:{
        origin : "*",
        methods : ["GET" , "POST"]
    }
})




mongoose.connect(DB_URL)
mongoose.connection.on("open" , ()=>{
    console.log(`connected to db`)
})


app.listen(port , ()=>{
    console.log("sever is up")
})