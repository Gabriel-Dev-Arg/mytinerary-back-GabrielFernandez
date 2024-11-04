import Itinerary from "../../../models/Itinerary.js";


const getAllItineraries = async (req, res, next) => {
    try {
        const itineraries = await Itinerary.find().populate('cityId');
        return res.status(200).json({
            success: true,
            response: itineraries
        });
    } catch (error) {
        return next(error);
    }
};

const getItinerariesByCity = async (req, res, next) => {
    try {
        const cityName = req.params.city;
        const itineraries = await Itinerary.find({ 
            city: new RegExp(`^${cityName}$`, 'i') 
        }).populate('cityId');

        return res.status(200).json({
            success: true,
            message: `Itineraries for city: ${cityName}`,
            response: itineraries,
        });
    } catch (error) {
        return next(error);
    }
};

const getItineraryById = async (req, res, next) => {
    const { id } = req.params; 
    try {
        const itinerary = await Itinerary.findById(id).populate('cityId');
        if (!itinerary) {
            return res.status(404).json({ 
                success: false,
                message: 'No se encontró el itinerario con este ID' 
            });
        }
        return res.status(200).json({
            success: true,
            response: itinerary
        }); 
    } catch (error) {
        return next(error);
    }
};

export { getAllItineraries, getItinerariesByCity, getItineraryById };