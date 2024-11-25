import joi from 'joi';

const userSignUpSchema = joi.object({
    firstName: joi.string()
        .min(2)
        .max(30)
        .pattern(/^[A-Za-zÀ-ÿ\s']+$/)
        .required()
        .messages({
            'string.empty': 'First name is required',
            'string.min': 'First name must be at least 2 characters long',
            'string.max': 'First name cannot be longer than 30 characters',
            'string.pattern.base': 'First name can only contain letters and spaces',
        }),

    lastName: joi.string()
        .min(2)
        .max(30)
        .pattern(/^[A-Za-zÀ-ÿ\s']+$/)
        .required()
        .messages({
            'string.empty': 'Last name is required',
            'string.min': 'Last name must be at least 2 characters long',
            'string.max': 'Last name cannot be longer than 30 characters',
            'string.pattern.base': 'Last name can only contain letters and spaces',
        }),

    email: joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Please enter a valid email',
        }),

    password: joi.string()
        .min(8)
        .max(30)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password cannot be longer than 30 characters',
        }),

    photo: joi.string()
        .uri()
        .required()
        .messages({
            'string.empty': 'Photo URL is required',
            'string.uri': 'Please enter a valid URL for the photo',
        }),

    country: joi.string()
        .required()
        .messages({
            'string.empty': 'Country is required',
        }),
});

export default userSignUpSchema;