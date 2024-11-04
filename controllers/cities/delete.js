import City from "../../models/City.js";
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedCity = await City.findByIdAndDelete(id);

        if (!deletedCity) {
            return res.status(404).json({
                success: false,
                message: "Ciudad no encontrada"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Ciudad eliminada exitosamente",
            response: deletedCity
        });

    } catch (error) {
        return next(error);
    }
};

export { destroy };