import Express from "express";
import { CrearLista, obtenerListas } from "../controller/AsistenciaController.js";
import Asistencia from "../models/Asistencias.js";

const router = Express.Router();

router.post("/", CrearLista);
router.get("/:fecha", obtenerListas);

export default router;
