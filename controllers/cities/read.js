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
        // Si todo va bien, respondemos con las ciudades
        return res.status(200).json({
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

        if (!city) {
            return res.status(404).json({
                error: "City not found"
            });
        }

        // Si todo va bien, respondemos con la ciudad encontrada
        return res.status(200).json({
            response: city
        });
    } catch (error) {
       
        next(error);  
    }
};

export { BringAllCities,idCities };
