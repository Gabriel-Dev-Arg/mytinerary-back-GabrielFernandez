import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"
import bad_request_handler from "./middleware/bad_request_handler.js";
import error_handler from "./middleware/error_handler.js";
import not_found_handler from "./middleware/not_found_handler.js";

const server = express()
const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port :" + PORT)

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors())
server.use(morgan("dev"))

// Middleware para deshabilitar el caché
server.use((req, res, next) => {
  res.set({
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  next();
});

// Rutas
server.use("/api", indexRouter)


server.use(not_found_handler)

server.use(bad_request_handler)
server.use(error_handler)


server.listen(PORT, ready)