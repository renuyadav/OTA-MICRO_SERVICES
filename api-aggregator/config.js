// src/config
const dotenv = require("dotenv");
dotenv.config();
console.log("Renu>>" + process.env.AMADEUS_SECRET_KEY);
// Exporting env variable
module.exports = {
    API_KEY: process.env.AMADEUS_API_KEY,
    SECRET_KEY: process.env.AMADEUS_SECRET_KEY
};