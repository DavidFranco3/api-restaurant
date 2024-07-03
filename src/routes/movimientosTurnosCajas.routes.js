const express = require("express");
const router = express.Router();
const movimientosTurnosCajas = require("../models/movimientosTurnosCajas");

// Registro de movimientos de turno/cajas
router.post("/registro", async (req, res) => {
  const datoMovimiento = movimientosTurnosCajas(req.body);
  await datoMovimiento
    .save()
    .then((data) =>
      res.status(200).json({
        mensaje: "Movimiento de turno/caja registrado",
        datos: data,
      })
    )
    .catch((error) => res.json({ message: error }));
});

// Obtener los movimientos de cajas
router.get("/listar", async (req, res) => {
  const { idTurno } = req.query;

  await movimientosTurnosCajas
    .find({ idTurno })
    .sort({ _id: -1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;