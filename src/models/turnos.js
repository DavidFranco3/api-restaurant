const mongoose = require("mongoose");
const { Schema } = mongoose;

// Modelo de la colección turnos
const turnos = new Schema({
  idTurno: { type: String },
  empleado: { type: String },
  caja: { type: String },
  fechaInicio: { type: Date },
  fechaFinal: { type: Date },
  observaciones: { type: String },
  fondoCaja: { type: Number },
  estado: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model("turnos", turnos, "turnos");
