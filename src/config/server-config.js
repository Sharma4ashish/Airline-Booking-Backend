const dotenv = require("dotenv");

dotenv.config();

const config =  {
    PORT : process.env.PORT || 8000,
};


module.exports =  config

