import City from "../../models/City.js";

// Traer todas las ciudades
let BringAllCities = async (req, res, next) => {
    try {
        let { name } = req.query;
        let query = {};

        if (name) {
            query.name = { $regex: "^" + name, $options: "i" };
        }
        let cities = await City.find(query);
        return res.status(200).json({
            success: true,
            response: cities
        });
    } catch (error) {
        next(error);  
    }
};

// Buscar ciudad por ID
let idCities = async (req, res, next) => {
    try {
        const { id } = req.params;
        let city = await City.findById(id);
        
        return res.status(200).json({
            success: true,
            response: city
        });
    } catch (error) {
        next(error);  
    }
};

export { BringAllCities, idCities };
