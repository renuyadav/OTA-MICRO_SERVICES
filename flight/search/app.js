const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const flightSearchRouter = require("./routes/flight-search");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 3000;

const app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/flight-search", flightSearchRouter);
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 3000);
  console.log("Web Server is listening at port " + (process.env.PORT || 3000));
}
module.exports = app;
