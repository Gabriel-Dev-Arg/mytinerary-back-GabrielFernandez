import City from "../../models/City.js";

const create = async (req, res, next) => {
    try {
        const cities = req.body;

        if (!cities) {
            return res.status(400).json({ 
                response: "No se proporcionaron datos para crear la ciudad.",
            });
        }

        // Creamos una nueva ciudad
        const newCity = await City.create(cities);

        // Retornamos el resultado
        return res.status(201).json({
            response: newCity
        });
    } catch (error) {
        return next(error); 
    }
};

export { create }; 
