import { Router } from "express";
import {getAllItineraries, getItinerariesByCity, getItineraryById} from "../controllers/cities/interinary/read.js"
import {createItinerary} from "../controllers/cities/interinary/create.js"
import {update} from "../controllers/cities/interinary/update.js"
import {deleteItinerary} from "../controllers/cities/interinary/delete.js"


const router = Router()

//Endpoint para obtener todos los itinerarios
//http://localhost:8080/api/itineraries
router.get("/",getAllItineraries)

//Endpoint para obtener los itinerarios de una ciudad
//http://localhost:8080/api/itineraries/city/Buenos Aires
router.get("/city/:city",getItinerariesByCity)

//Endpoint para obtener un itinerario por su ID
//http://localhost:8080/api/itineraries/67295146008bd453ecc45da4
router.get("/:id",getItineraryById)

//Endpoint para crear un nuevo itinerario
//http://localhost:8080/api/itineraries/create
router.post("/create",createItinerary)

//Endpoint para actualizar un itinerario
//http://localhost:8080/api/itineraries/update/6728e5c40f714c4d1772efe4
router.put("/update/:id",update)

//Endpoint para eliminar un itinerario
//http://localhost:8080/api/itineraries/delete/6729256eeddcb9ee3ea05509
router.delete("/delete/:id",deleteItinerary)


export default router