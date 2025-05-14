const app = require("./src/app")
const { config, logger } = require("./src/config")




app.listen(6000, () => {
    console.log(`Server listning at ${config.PORT}`)
    logger.info("succesfully started the server ",{})


}
);