const mongoose = require("mongoose");
const { Schema } = mongoose;

// modelo de la coleccion ventas
const ventas = new Schema({
  numeroTiquet: { type: String },
  cliente: { type: String },
  mesa: { type: String },
  tiquetVenta: { type: String },
  tipo: { type: String },
  usuario: { type: String },
  productos: { type: Array, default: [] },
  estado: { type: String },
  detalles: { type: String },
  tipoPago: { type: String },
  efectivo: { type: String },
  cambio: { type: Number },
  subtotal: { type: Number },
  tipoPedido: { type: String },
  hacerPedido: { type: String },
  tipoDescuento: { type: String },
  descuento: { type: Number },
  pagado: { type: String },
  total: { type: Number },
  iva: { type: Number },
  atendido: { type: String },
  comision: { type: Number },
  mes: { type: String },
  año: { type: String },
  semana: { type: String },
  fecha: {type: Date},
  metodosPago: { type: Object, default: {} },
}, {
  timestamps: true
});

module.exports = mongoose.model("ventas", ventas, "ventas");
