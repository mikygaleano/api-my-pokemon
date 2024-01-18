// favoritesSchema.js
import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const favoritesSchema = new mongoose.Schema({
    favorites: [favoriteSchema],  // Ahora es un array de objetos con name y description
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

export { favoritesSchema };
