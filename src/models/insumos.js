const mongoose = require("mongoose");
const { Schema } = mongoose;

const insumos = new Schema(
  {
    nombre: { type: String },
    categoria: { type: String },
    umCompra: { type: String },
    umTrabajo: { type: String },
    stock: { type: Number },
    precioCompra: { type: Number },
    estado: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("insumos", insumos, "insumos");
