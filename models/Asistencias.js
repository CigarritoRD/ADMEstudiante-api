import mongoose from "mongoose";

const AsistenciasSchema = mongoose.Schema({
  materia: {
    type: String,
    required: true,
  },

  asistencia: {
    type: Array,
  },
  fecha: {
    type: Date,
    default: new Date(),
  },
});

const Asistencia = mongoose.model("Asistencia", AsistenciasSchema);
export default Asistencia;
