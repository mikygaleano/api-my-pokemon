// app.js
import express from "express";
import dotenv from "dotenv";
import {mongoose} from "./db.js"; // Importas la instancia configurada de mongoose
import { Usuario } from "./model/usuarioModel.js";

dotenv.config();

const PORT = process.env.PORT ?? 1234;

const app = express();

app.disable("x-powered-by");

// Resto de tu código para definir rutas
app.get('/', (req, res)=> {
  res.json({mensaje: 'maikidev'})
})

// Punto final para crear nuevos usuarios
app.post('/api/nuevos-usuarios', async (req, res) => {
  // ... tu código para crear nuevos usuarios usando mongoose
  try {
    // Obtiene los datos del cuerpo de la solicitud
    const { nombre, correo, password } = req.body;

    // Crea un nuevo usuario en la base de datos
    const nuevoUsuario = await Usuario.create({ nombre, correo, password });

    // Devuelve el nuevo usuario como parte de la respuesta
    res.status(201).json({ usuario: nuevoUsuario });
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error);
    res.status(500).json({ error: 'Error al crear un nuevo usuario' });
  }
});

// Punto final para obtener nuevos usuarios desde la base de datos
app.get('/api/nuevos-usuarios', async (req, res) => {
  // ... tu código para obtener nuevos usuarios usando mongoose
  try {

    const usuarios = Usuario.find();
    res.status(201).json({usuarios})
    
  } catch (error) {
    console.error('Error al buscar usuarios;', error);
    res.status(500).json({error: 'Error al buscar usuarios'})
  }
});

// Punto final para obtener favoritos desde la base de datos
app.get('/api/favoritosapi/favoritos', async (req, res) => {
  // ... tu código para obtener favoritos usando mongoose
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
