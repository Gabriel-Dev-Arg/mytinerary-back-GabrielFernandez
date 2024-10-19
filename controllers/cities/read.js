
import City from "../../models/City.js";

//traer todas las ciudades 
let BringAllCities = async (req,res) =>{
    try {
        let city = await City.find();
        
        return res.status(200).json({
            response:city
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        });
    }
}

export {BringAllCities}