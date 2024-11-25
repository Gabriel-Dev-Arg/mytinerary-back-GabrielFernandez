import { Schema, model } from "mongoose";

const itinerarySchema = new Schema({
  author: {
    name: { type: String, required: true },
    photo: { type: String, required: true },
    title: { type: String},
  },
  image: { type: String},
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  duration: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  hashtags: {
    type: [String],
  },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
  city: {
    type: String,
    required: true
},
  cityId: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
});


const Itinerary = model("Itinerary", itinerarySchema);

export default Itinerary;
