import mongoose from "mongoose";
const EstudianteSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },

  calificaciones: {
    type: Object,
    default: {
      lenguaje: 0,
      matematicas: 0,
      naturales: 0,
      sociales: 0,
    },
  },
});

const Estudiante = mongoose.model("Estudiante", EstudianteSchema);
export default Estudiante;
