import express from "express";
import conectarDB from "./db/database.js";
import dotenv from "dotenv";
import cors from "cors";
import EstudiantesRoutes from "./routes/EstudiantesRoutes.js";
import AsistenciasRoutes from "./routes/AsistenciasRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
conectarDB();

app.use("/api/estudiantes", EstudiantesRoutes);
app.use("/api/lista", AsistenciasRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`servidor servido en el puerto ${PORT}`);
});
