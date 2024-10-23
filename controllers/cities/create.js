import City from "../../models/City.js";

const create = async (req, res, next) => {
    try {
        const cities = req.body;
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
