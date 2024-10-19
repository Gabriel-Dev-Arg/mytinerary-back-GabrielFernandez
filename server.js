import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import indexRouter from "./router/index.js"


const server  = express()
const PORT = process.env.PORT || 8080

const ready = ()=> console.log("server ready in port :"+PORT)
// Peticiones y respuestas en json
server.use(express.json())
// Funcion para dar el ok en mas parametros
server.use(express.urlencoded({extended:true}))

server.use("/api",indexRouter)

server.listen(PORT,ready)