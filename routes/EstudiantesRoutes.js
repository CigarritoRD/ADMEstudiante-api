import Express from "express";
import {
  actualizarEstudiante,
  AgregarNota,
  eliminarEstudiante,
  obtenerEstudiantes,
  obtenerUnEstudiante,
  registrarEstudiante,
} from "../controller/EstudiantesController.js";
import Estudiante from "../models/Estudiante.js";
const router = Express.Router();

router.post("/", registrarEstudiante);
router.get("/", obtenerEstudiantes);
router.get("/:id", obtenerUnEstudiante);

router.post("/:id", AgregarNota);

router.patch("/:id", actualizarEstudiante);

router.delete("/:id", eliminarEstudiante);

export default router;
