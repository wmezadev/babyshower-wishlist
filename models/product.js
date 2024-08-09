import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  is_locked: {
    type: Boolean,
    required: true,
  },
  available_quantity: {
    type: Number,
    required: true,
  },
  locked_quantity: {
    type: Number,
    required: true,
  },
  locked_by: {
    type: String,
    required: false,
  },
  last_updated: {
    type: String,
    required: false,
  }
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
