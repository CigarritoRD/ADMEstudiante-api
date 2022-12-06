import mongoose from "mongoose";

const CalificacionesSchema = mongoose.Schema(
  {
    materia: {
      type: String,
      required: true,
      trim: true,
    },
    calificacion: {
      type: Number,
      required: true,
      default: 0,
      max: 100,
    },
    estudiante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Estudiante",
    },
  },
  {
    timestamps: true,
  }
);

const Calificaciones = mongoose.model("Calificaciones", CalificacionesSchema);
export default Calificaciones;
