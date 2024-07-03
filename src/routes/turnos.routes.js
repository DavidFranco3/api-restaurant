const express = require("express");
const turnos = require("../models/turnos");
const router = express.Router();

// Registro de turnos
router.post("/registro", async (req, res) => {
  const datoTurno = turnos(req.body);
  await datoTurno
    .save()
    .then((data) =>
      res.status(200).json({
        mensaje: "Turno registrado",
        datos: data,
      })
    )
    .catch((error) => res.json({ message: error }));
});

// Obtener los turnos
router.get("/listar", async (req, res) => {
  await turnos
    .find({ estado: "cerrado" })
    .sort({ _id: -1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener el último turno creado
router.get("/ultimo", async (req, res) => {
  await turnos
    .findOne()
    .sort({ _id: -1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Terminar turno
router.put("/cerrar/:id", async (req, res) => {
  const { id } = req.params;
  const { estado, fechaFinal } = req.body;
  await turnos
    .updateOne({ _id: id }, { $set: { estado, fechaFinal } })
    .then((data) =>
      res.status(200).json({ mensaje: "Estado del ingrediente actualizado" })
    )
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
