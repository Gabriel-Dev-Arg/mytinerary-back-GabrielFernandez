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
            response: cities
        });
    } catch (error) {
        return next(error); 
    }
};

export { BringAllCities };
