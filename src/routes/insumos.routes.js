const express = require("express");
const router = express.Router();
const insumos = require("../models/insumos");

// Registrar insumos
router.post("/registro", async (req, res) => {
  const datoInsumo = insumos(req.body);
  await datoInsumo
    .save()
    .then((data) =>
      res.status(200).json({
        mensaje: "Insumo registrado",
        datos: data,
      })
    )
    .catch((error) => res.json({ message: error }));
});

// Listar insumos
router.get("/listar", async (req, res) => {
  await insumos
    .find({ estado: "true" })
    .sort({ _id: -1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Borrar un insumo
router.delete("/eliminar/:id", async (req, res) => {
  const { id } = req.params;
  await insumos
    .deleteOne({ _id: id })
    .then((data) => res.status(200).json({ mensaje: "Insumo eliminado" }))
    .catch((error) => res.json({ message: error }));
});

// Cambiar el estado de un insumo
router.put("/cancelar/:id", async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  await insumos
    .updateOne({ _id: id }, { $set: { estado } })
    .then((data) =>
      res
        .status(200)
        .json({ mensaje: "El insumo fue desactivado exitosamente" })
    )
    .catch((error) => res.json({ message: error }));
});

// Actualizar los datos de un insumo
router.put("/actualizar/:id", async (req, res) => {
  const { id } = req.params;
  const { stock, precioCompra } = req.body;
  await insumos
    .updateOne({ _id: id }, { $set: { saldo } })
    .then((data) =>
      res.status(200).json({ mensaje: "Datos del insumo actualizados" })
    )
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
