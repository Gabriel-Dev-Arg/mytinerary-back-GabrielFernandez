const bad_request_handler = (err, req, res, next) => {
    // Solo manejar los errores con status 400
    if (err.status == 400) {
        return res.status(400).json({
            success: false,
            message: `Bad Request: ${err.message}`
        });
    }
    next(err);
};

export default bad_request_handler;
