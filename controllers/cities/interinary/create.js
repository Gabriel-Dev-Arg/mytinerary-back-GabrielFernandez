import Itinerary from "../../../models/Itinerary.js";

const createItinerary = async (req, res, next) => {
    try {
        const { author, price, duration, hashtags, activities, comments, city, cityId } = req.body;
        
        const newItinerary = await Itinerary.create({
            author,
            price,
            duration,
            hashtags,
            activities,
            comments,
            city,
            cityId
        });

        const populatedItinerary = await Itinerary.findById(newItinerary._id).populate('cityId');
        
        return res.status(201).json({ 
            success: true,
            message: 'Itinerario creado exitosamente', 
            response: populatedItinerary 
        });
    } catch (error) {
        return next(error);
    }
};

export { createItinerary };