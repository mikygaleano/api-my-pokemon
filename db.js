import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB_USER, MONGO_DB_PASSWORD, MONGO_DB_NAME } = process.env;

const connectionString = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_NAME}.ic2ocle.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});
db.on('connected', () => {
  console.log('Conectado a MongoDB');
});

db.on('disconnected', () => {
  console.log('Desconectado de MongoDB');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Conexión a MongoDB cerrada debido a la terminación de la aplicación');
    process.exit(0);
  });
});

mongoose.Promise = global.Promise;

export { mongoose };

