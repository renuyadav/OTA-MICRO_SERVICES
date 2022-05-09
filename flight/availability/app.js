const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const flightBookingRouter = require("./routes/flight-availability");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/flight-availability", flightBookingRouter);
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.port || 3000);
  console.log("Web Server is listening at port " + (process.env.port || 3000));
}

module.exports = app;
