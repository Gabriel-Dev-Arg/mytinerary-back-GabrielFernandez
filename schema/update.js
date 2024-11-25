import joi from 'joi';

const userUpdateSchema = joi.object({
    // ID OBLIGATORIO
    user: joi.string()
        .required()
        .messages({
            'string.empty': 'User ID is required',
            'any.required': 'User ID is required'
        }),
    firstName: joi.string()
        .min(2)
        .max(30)
        .pattern(/^[A-Za-zÀ-ÿ\s']+$/)
        .messages({
            'string.min': 'First name must be at least 2 characters long',
            'string.max': 'First name cannot be longer than 30 characters',
            'string.pattern.base': 'First name can only contain letters and spaces',
        }),

    lastName: joi.string()
        .min(2)
        .max(30)
        .pattern(/^[A-Za-zÀ-ÿ\s']+$/)
        .messages({
            'string.min': 'Last name must be at least 2 characters long', 
            'string.max': 'Last name cannot be longer than 30 characters',
            'string.pattern.base': 'Last name can only contain letters and spaces',
        }),

    photo: joi.string()
        .uri()
        .messages({
            'string.uri': 'Please enter a valid URL for the photo',
        }),
    country: joi.string(),
    password: joi.string()
        .min(8)
        .max(30)
        .messages({
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password cannot be longer than 30 characters',
        }),

}).min(2); //campos a actualizar

export default userUpdateSchema;