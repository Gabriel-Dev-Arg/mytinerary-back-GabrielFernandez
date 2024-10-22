const error_handler = (error,req, res, next) => {
    console.log(error);
    return res.status(500).json({
        success: false,
        // Error 500 - Error interno del servidor
        message: `Ocurrió un error en la ruta ${req.originalUrl} utilizando el método ${req.method}. Estamos trabajando para solucionarlo.`
    });
};

export default error_handler;
