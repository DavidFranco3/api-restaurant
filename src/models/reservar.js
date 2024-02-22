const mongoose = require("mongoose");
const { Schema } = mongoose;

// modelo de la coleccion cajas
const reservar = new Schema({
    nombre: { type: String },
    numeroPersonas: { type: String },
    estado: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model("reservar", reservar, "reservar");
