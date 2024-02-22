const mongoose = require("mongoose");
const { Schema } = mongoose;

// modelo de la coleccion cajas
const mesas = new Schema({
    numeroMesa: { type: String },
    descrpcion: { type: String },
    numeroPersonas: { type: String },
    estado: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model("mesas", mesas, "mesas");
