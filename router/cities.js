import { Router } from "express";
import {BringAllCities, idCities} from "../controllers/cities/read.js"
import {create} from "../controllers/cities/create.js"

const router = Router()

// Endpoint para obtener todas las ciudades
// http://localhost:8080/api/cities
router.get("/",BringAllCities)

//Endpoint para obtener las ciudades por us ID
// http://localhost:8080/api/cities/id/6717e832a0345dda4ac10c16
router.get("/id/:id",idCities)

//Endpoint para crear un objeto de ciudad
//http://localhost:8080/api/cities/createcity
router.post("/createcity",create)




export default router