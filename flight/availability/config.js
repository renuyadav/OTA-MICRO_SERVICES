// src/config
const dotenv = require("dotenv");
dotenv.config();
console.log("availability service>>" + process.env.API_ENDPOINT);
// Exporting env variable
module.exports = {
    URL:process.env.API_ENDPOINT
};