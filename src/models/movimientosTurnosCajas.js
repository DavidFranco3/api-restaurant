const mongoose = require("mongoose");
const { Schema } = mongoose;

// Modelo de la colección turnos
const movimientosTurnosCajas = new Schema(
  {
    idTurno: { type: String },
    nombreCaja: { type: String },
    movimiento: { type: String },
    cantidad: { type: Number },
    fecha: { type: Date },
    razon: { type: String },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(
  "movimientosTurnosCajas",
  movimientosTurnosCajas,
  "movimientosTurnosCajas",
);
