const express = require("express");
const router = express.Router();
const movimientosInsumos = require("../models/movimientosInsumos");

// Registro de movimientos de insumos
router.post("/registro", async (req, res) => {
  const datoMovimiento = movimientosInsumos(req.body);
  await datoMovimiento
    .save()
    .then((data) =>
      res.status(200).json({
        mensaje: "Movimiento de insumos registrado",
        datos: data,
      })
    )
    .catch((error) => res.json({ message: error }));
});

// Obtener los movimientos de insumos
router.get("/listar", async (req, res) => 
  await movimientosInsumos
    .find()
    .sort({ _id: -1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
