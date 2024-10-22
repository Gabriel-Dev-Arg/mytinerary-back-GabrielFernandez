import { Router } from "express";
import {BringAllCities} from "../controllers/cities/read.js"
import {create} from "../controllers/cities/create.js"

const router = Router()

// Endpoint para obtener todas las ciudades
// http://localhost:8080/api/cities
router.get("/",BringAllCities)

//Endpoint para crear un objeto de ciudad
//http://localhost:8080/api/cities/createcity
router.post("/createcity",create)

//crear por id 


export default router