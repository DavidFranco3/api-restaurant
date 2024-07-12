const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const movimientosInsumos = new Schema(
  {
    nombreInsumo: { type: String },
    movimiento: { type: String },
    cantidad: { type: Number },
    umInusmo: { type: String },
    fecha: { type: Date },
    razon: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "movimientosInsumos",
  movimientosInsumos,
  "movimientosInsumos"
);
