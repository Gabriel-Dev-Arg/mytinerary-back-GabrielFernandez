import { Router } from "express";
import {BringAllCities} from "../controllers/cities/read.js"


const router = Router()

// Endpoint para obtener todas las ciudades

router.get("/",BringAllCities)

export default router