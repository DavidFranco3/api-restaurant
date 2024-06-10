const mongoose = require("mongoose");
const { Schema } = mongoose;

const comision = new Schema({
    nombreComision: { type: String },
    valor: { type: Number },
    estado: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("comision", comision, "comision");
