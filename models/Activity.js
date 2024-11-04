// models/Activity.js
import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  name: { type: String, required: true }, // Nombre de la actividad
  description: { type: String }, // Descripción de la actividad (opcional)
  duration: { type: Number, required: true } // Duración en minutos o horas (dependiendo del contexto)
});

const Activity = model('Activity', activitySchema);

export default Activity;