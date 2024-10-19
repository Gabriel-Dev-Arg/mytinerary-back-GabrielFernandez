import { Schema, model } from 'mongoose';

const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    population: {
        type: Number
    },
    currency: {
        type: String
    },
    mainLanguage: {
        type: String
    },
    timeZone: {
        type: String
    }
}, {
    timestamps: true
});


const City = model('City', citySchema);

export default City;