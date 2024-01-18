import mongoose from "mongoose";
import { favoritesSchema } from "../schemas/favoritesSchema.js";

const Favorite = mongoose.model('Favorite', favoritesSchema);

export {Favorite}
