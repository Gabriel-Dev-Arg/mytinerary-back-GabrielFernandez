import Itinerary from "../../../models/Itinerary.js";

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            id,
            updatedData,
            { 
                new: true,
                runValidators: true
            }
        ).populate('cityId');

        if (!updatedItinerary) {
            return res.status(404).json({
                success: false,
                message: "Itinerario no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Itinerario actualizado exitosamente",
            response: updatedItinerary
        });

    } catch (error) {
        return next(error);
    }
};
  
  export { update };