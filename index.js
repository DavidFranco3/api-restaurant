const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://34cda94143a14ff3938078498a0bc8e4@o1301469.ingest.sentry.io/6538433",
  tracesSampleRate: 1.0,
});

const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

require("./src/database");

const file = path.join(__dirname, "favicon.ico");

const notFound = require("./src/middleware/notFound");
const handleErrors = require("./src/middleware/handleErrors");
const { verifyToken } = require("./src/middleware/verifyToken");

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 5050;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(favicon(file));

app.get("/", (_req, res) => {
  return res.status(200).json({
    mensaje: "API , Propiedad de ISOTECH MÉXICO",
  });
});

// Routes
app.use(require("./src/routes/login.routes"));
app.use("/usuarios/", verifyToken, require("./src/routes/usuarios.routes"));
app.use("/clientes/", require("./src/routes/usuarios.routes"));
app.use("/comision/", verifyToken, require("./src/routes/comision.routes"));
app.use("/ventas/", verifyToken, require("./src/routes/ventas.routes"));
app.use(
  "/pedidos/",
  verifyToken,
  require("./src/routes/pedidosClientes.routes"),
);
app.use("/categorias/", verifyToken, require("./src/routes/categorias.routes"));
app.use("/productos/", verifyToken, require("./src/routes/productos.routes"));
app.use("/logs/", verifyToken, require("./src/routes/logSistema.routes"));
app.use(
  "/ingredientes/",
  verifyToken,
  require("./src/routes/ingredientes.routes"),
);
app.use("/cajas/", verifyToken, require("./src/routes/cajas.routes"));
app.use(
  "/movimientosCajas/",
  verifyToken,
  require("./src/routes/movimientosCajas.routes"),
);
app.use("/mesas/", verifyToken, require("./src/routes/mesas.routes"));
app.use("/reservar/", verifyToken, require("./src/routes/reservar.routes"));
app.use("/turno/", verifyToken, require("./src/routes/turnos.routes"));
app.use(
  "/movTurnoCaja",
  verifyToken,
  require("./src/routes/movimientosTurnosCajas.routes"),
);
app.use("/insumos", verifyToken, require("./src/routes/insumos.routes"));
app.use(
  "/movInsumos",
  verifyToken,
  require("./src/routes/movimientosInsumos.routes"),
);
app.use("/logo", verifyToken, require("./src/routes/logo.routes"));

app.use(notFound);
Sentry.setupExpressErrorHandler(app);
app.use(handleErrors);

// Inicio del servidor en modo local
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
