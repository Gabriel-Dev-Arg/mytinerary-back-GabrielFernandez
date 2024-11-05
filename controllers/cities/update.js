import City from "../../models/City.js";
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedCity = await City.findByIdAndUpdate(
            id,
            updatedData,
            { 
                new: true,  
                runValidators: true  
            }
        );

        if (!updatedCity) {
            return res.status(404).json({
                success: false,
                message: "Ciudad no encontrada"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Ciudad actualizada exitosamente",
            response: updatedCity
        });

    } catch (error) {
        return next(error);
    }
};

export { update };