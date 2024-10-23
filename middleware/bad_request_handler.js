const bad_request_handler = (err, req, res, next) => {
    console.error(err); // Muestra el error completo para debug
    return res.status(400).json({
        success: false,
        // Bad Request
        message: `Bad Request: ${err.message}`
    });
};

export default bad_request_handler;
