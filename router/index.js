import { Router } from "express";
import citiesRouter from "./cities.js"
import interinaryRouter from "./interinary.js"

const router = Router()

//utlizamos la ruta , le agregamos la ruta , y la ruta de productos

router.use("/cities",citiesRouter)

router.use("/itineraries",interinaryRouter)

export default router