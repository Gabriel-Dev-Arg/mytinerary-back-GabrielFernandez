const error_handler = (err, req, res, next) => {
    console.error(err.stack); // Muestra el error completo para debug
    return res.status(500).json({
        success: false,
        // Error 500 - Error interno del servidor
        message: `Ocurrió un error en la ruta ${req.originalUrl} utilizando el método ${req.method}. Estamos trabajando para solucionarlo.`
    });
};

export default error_handler;
