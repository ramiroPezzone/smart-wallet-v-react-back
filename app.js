require("dotenv").config();
const MongoStore = require("connect-mongo");
const express = require("express");
const app = express();
const port = process.env.PORT;
const passport = require("passport");
const connectDB = require("./config/db");
const MONGODB_URI = process.env.MONGODB_URI;
const session = require("express-session");
const authRoutes = require("./routes/auth");
const routes = require("./routes/routes");

// Conexión con DB
connectDB();

// Configuración del passport
require("./config/passport")(passport);

// Configuración del Session
app.use(
  session({
    secret: "aguanteADT",
    resave: "false",
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGODB_URI }),
  })
);

// Middlewares del passport
app.use(passport.initialize());
app.use(passport.session());

// Seteando JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Puesta en línea del servidor
app.listen(port, () =>
  console.log(`Servidor en línea en el puerto ${port} ✔️`)
);

// Routes
app.use("/", routes);
app.use("/auth", authRoutes);
