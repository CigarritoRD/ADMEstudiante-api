import Estudiante from "../models/Estudiante.js";

// obtener todos los estudiantes
const obtenerEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find({});
    if (estudiantes.length) return res.status(200).json(estudiantes);
    const error = new Error("no se encontraron estudiantes");
    return res.status(400).json({ error: error.message });
  } catch (error) {
    console.log(error);
  }
};

const actualizarEstudiante = async (req, res) => {
  console.log(req.params.id);
  const options = { new: true };
  try {
    const estudiante = await Estudiante.findById(req.params.id);
    console.log(estudiante);

    if (estudiante) {
      estudiante.nombre = req.body.nombre;
      estudiante.apellido = req.body.apellido;
      const result = await estudiante.save();
      return res.status(200).json(result);
    }

    const error = new Error("no se encontraron estudiantes");
    return res.status(400).json({ error: error.message });
  } catch (error) {
    console.log(error);
  }
};

// obtener estudiante
const obtenerUnEstudiante = async (req, res) => {
  const { id } = req.params;
  try {
    const estudiante = await Estudiante.findById(id);
    if (estudiante) return res.status(200).json(estudiante);
    const error = new Error("no se encontraron estudiantes");
    return res.status(400).json({ error: error.message });
  } catch (error) {
    console.log(error);
  }
};

// registrar estudiante
const registrarEstudiante = async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    const guardarEstudiante = await nuevoEstudiante.save();
    if (guardarEstudiante) res.status(201).json({ guardarEstudiante });
    const error = new Error("No se pudo guardar el Estudiante");
    return res.status(400).json({ error: error.message });
  } catch (error) {
    console.log(error);
  }
};

// Agregar Nota al estudiante
const AgregarNota = async (req, res) => {
  const { id } = req.params;
  const { calificaciones } = req.body;
  console.log(id, calificaciones);
  const options = { new: true };

  try {
    const estudiante = await Estudiante.findByIdAndUpdate(
      id,
      {
        $set: { calificaciones },
      },
      options
    );

    if (estudiante) {
      estudiante.save();
      return res.status(201).json({ message: "Creado con exito", estudiante });
    }

    const error = new Error("No se pudo guardar la nota");
    return res.status(400).json({ error: error.message });
  } catch (error) {
    console.log(error);
  }
};

const eliminarEstudiante = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminarEstudiante = await Estudiante.findByIdAndDelete(id);
    if (eliminarEstudiante)
      return res
        .status(200)
        .json({ message: "Estudiante eliminado con exito", eliminarEstudiante });
    const error = new Error("no se encontro el estudiante");
    res.status(404).json({ error: error.message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export {
  obtenerEstudiantes,
  obtenerUnEstudiante,
  registrarEstudiante,
  eliminarEstudiante,
  AgregarNota,
  actualizarEstudiante,
};
