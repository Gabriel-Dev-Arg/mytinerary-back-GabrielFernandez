import { Router } from "express";{}
import citiesRouter from "./cities.js"

const router = Router()

//utlizamos la ruta , le agregamos la ruta , y la ruta de productos

router.use("/cities",citiesRouter)

export default router