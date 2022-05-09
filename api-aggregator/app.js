const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require("./routes/flight.js")(app);
//app.use("/flight-search", flightRouter);

app.listen(process.env.PORT || 3000);
console.log("Web Server is listening at port " + (process.env.PORT || 3000));

module.exports = app;
