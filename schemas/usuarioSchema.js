import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  password: String,
});

export {usuarioSchema}