const express = require("express");
const router = express.Router();
const comision = require("../models/comision");

// REGISTRO DE COMISIÓN
router.post("/registro", async (req, res) => {
    const datoComision = comision(req.body);
    await datoComision
        .save()
        .then((data) => 
            res.status(200).json(
                {
                    mensaje: "Comision registrada", datos: data
                }
            ))
        .catch((error) => res.json({ message: error}));
});

router.get("/listar", async (req, res) => {
    await comision
        .find({ estado: "true" })
        .sort({ _id: -1 })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/obtener/:id", async (req, res) => {
    const { id } = req.params;
    await comision
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/actualizar/:id", async (req, res) => {
    const { id } = req.params;
    const { valor } = req.body;
    await comision
        .updateOne({ _id: id }, { $set: { valor } })
        .then((data) => res.status(200).json({ mensaje: "Datos de la comision actualizados" }))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;