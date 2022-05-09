// src/config
const dotenv = require("dotenv");
dotenv.config();
// Exporting env variable
module.exports = {
    URL:process.env.API_ENDPOINT
};