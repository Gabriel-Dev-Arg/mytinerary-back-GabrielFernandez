import { Router } from "express";
import citiesRouter from "./cities.js"
import interinaryRouter from "./interinary.js"
import usersRouter from "./users.js"
import routerAuth from "./auth.js"

const router = Router()

//utlizamos la ruta , le agregamos la ruta , y la ruta de productos

router.use("/cities",citiesRouter)

router.use("/itineraries",interinaryRouter)

router.use("/users",usersRouter)

router.use("/auth", routerAuth)

export default router