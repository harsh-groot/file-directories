const express = require("express");
const SocketManager = require("./libs/socketManager");
const app = express();
const sockServer = require("http").createServer(app);
const winston = require("winston");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db");


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
const port = process.env.PORT||8000

SocketManager.connectSocket(sockServer);
const server = sockServer.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;

