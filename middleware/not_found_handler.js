const not_found_handler = (error,req, res, next) => {
    console.log(error);
    if (error.nombre == "bad Request"){
        return res.status(404).json({
            success: false,
            // Manejo de error 404
            message: `La petición con el método ${req.method} en la ruta ${req.url} no fue encontrada - Not Found`
        });
    }
    next(error)
}

export default not_found_handler;
