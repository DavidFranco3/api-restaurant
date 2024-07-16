const mongoose = require("mongoose");
const { Schema } = mongoose;

const logo = new Schema(
  {
    imagen: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("logo", logo, "logo");
