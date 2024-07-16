const express = require("express");
const router = express.Router();
const logo = require("../models/logo");

// Registro de logo
router.post("/registro", async (req, res) => {
  const datoLogo = logo(req.body);
  await datoLogo
    .save()
    .then((data) =>
      res.status(200).json({
        mensaje: "Logo registrado",
        datos: data,
      })
    )
    .catch((error) => res.json({ message: error }));
});

// Obtener los movimientos de insumos
router.get("/listar", async (req, res) => {
  await logo
    .find()
    .sort({ _id: -1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/actualizar/:id", async (req, res) => {
  const { id } = req.params;
  const { imagen } = req.body;
  await logo
    .updateOne({ _id: id }, { $set: { imagen } })
    .then((data) => res.status(200).json({ mensaje: "Datos del logo" }))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
