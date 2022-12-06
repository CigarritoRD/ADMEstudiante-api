import Asistencia from "../models/Asistencias.js";

const CrearLista = async (req, res) => {
  try {
    console.log(req.body);
    const asistencia = new Asistencia(req.body);
    const result = asistencia.save();
    if (result) return res.status(201).json(asistencia);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const obtenerListas = async (req, res) => {
  const fechaInicial = req.params.fecha;
  console.log(fechaInicial);
  const fechaFinal = fechaInicial.substring(0, 8).concat(Number(fechaInicial.substring(8)) + 1);
  try {
    if (fechaInicial) {
      const listaPorFecha = await Asistencia.find({
        $and: [{ fecha: { $gte: new Date(fechaInicial), $lte: new Date(fechaFinal) } }],
      });
      if (listaPorFecha) return res.status(200).json(listaPorFecha);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { CrearLista, obtenerListas };
