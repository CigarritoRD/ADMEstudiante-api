import mongoose from "mongoose";

const conectarDB = async () => {
  const URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("conectado a la base de datos");
  } catch (e) {
    console.log(e, "error al conectar a la BD");
  }
};
export default conectarDB;
